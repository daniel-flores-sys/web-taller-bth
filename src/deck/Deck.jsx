import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { H, W, camaraGeneral, camaraPara, transformDe } from './layout'
import Tablero from './Tablero'

const sinMovimiento = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function leerHash(total) {
  const n = parseInt(window.location.hash.replace(/[^0-9]/g, ''), 10)
  return Number.isFinite(n) && n >= 1 && n <= total ? n - 1 : 0
}

export default function Deck({ laminas, secciones }) {
  const [actual, setActual] = useState(() => leerHash(laminas.length))
  const [paso, setPaso] = useState(0)
  const [general, setGeneral] = useState(false)
  const [notas, setNotas] = useState(false)
  const [vista, setVista] = useState({ w: window.innerWidth, h: window.innerHeight })
  const mundo = useRef(null)
  const ultimaCam = useRef(null)
  const animacion = useRef(null)
  const toque = useRef(null)

  const lamina = laminas[actual]

  // ---------- navegación ----------
  const irA = useCallback((i, alFinal = false) => {
    const j = Math.max(0, Math.min(laminas.length - 1, i))
    setActual(j)
    setPaso(alFinal ? laminas[j].pasos : 0)
    setGeneral(false)
  }, [laminas])

  const siguiente = useCallback(() => {
    if (general) { setGeneral(false); return }
    if (paso < lamina.pasos) setPaso(paso + 1)
    else if (actual < laminas.length - 1) irA(actual + 1)
  }, [general, paso, lamina, actual, laminas.length, irA])

  const anterior = useCallback(() => {
    if (general) { setGeneral(false); return }
    if (paso > 0) setPaso(paso - 1)
    else if (actual > 0) irA(actual - 1, true)
  }, [general, paso, actual, irA])

  useEffect(() => {
    function tecla(e) {
      if (e.target?.closest?.('input, textarea, select, [contenteditable]')) return
      if (e.ctrlKey || e.metaKey || e.altKey) return
      const k = e.key
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(k)) { e.preventDefault(); siguiente() }
      else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(k)) { e.preventDefault(); anterior() }
      else if (k === 'Home') irA(0)
      else if (k === 'End') irA(laminas.length - 1)
      else if (k === 'o' || k === 'O' || k === 'Escape') setGeneral((g) => (k === 'Escape' ? false : !g))
      else if (k === 'n' || k === 'N') setNotas((v) => !v)
      else if (k === 'f' || k === 'F') pantallaCompleta()
    }
    window.addEventListener('keydown', tecla)
    return () => window.removeEventListener('keydown', tecla)
  }, [siguiente, anterior, irA, laminas.length])

  useEffect(() => {
    const r = () => setVista({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener('resize', r)
    return () => window.removeEventListener('resize', r)
  }, [])

  useEffect(() => {
    const h = () => { const i = leerHash(laminas.length); if (i !== actual) irA(i) }
    window.addEventListener('hashchange', h)
    return () => window.removeEventListener('hashchange', h)
  }, [actual, irA, laminas.length])

  useEffect(() => {
    const nuevo = `#/${actual + 1}`
    if (window.location.hash !== nuevo) window.history.replaceState(null, '', nuevo)
    document.title = `${lamina.titulo} | Taller web con IA`
  }, [actual, lamina.titulo])

  // ---------- cámara ----------
  const destino = useMemo(
    () => (general ? camaraGeneral(laminas, vista.w, vista.h) : camaraPara(lamina, vista.w, vista.h)),
    [general, lamina, laminas, vista],
  )

  useLayoutEffect(() => {
    const el = mundo.current
    if (!el) return
    const fin = transformDe(destino, vista.w, vista.h)
    const previa = ultimaCam.current
    ultimaCam.current = destino

    if (!previa || sinMovimiento()) {
      animacion.current?.cancel()
      el.style.transform = fin
      return
    }

    let inicio = transformDe(previa, vista.w, vista.h)
    if (animacion.current && animacion.current.playState === 'running') {
      inicio = getComputedStyle(el).transform
      animacion.current.cancel()
    }

    // Si el salto es largo, la cámara se aleja a mitad de camino (efecto Prezi)
    const dist = Math.hypot(destino.x - previa.x, destino.y - previa.y)
    const zMin = Math.min(previa.z, destino.z)
    const zVuelo = Math.min(zMin, Math.min(vista.w, vista.h) / (dist * 0.9 + W * 1.4))
    const cuadros = [{ transform: inicio }]
    let duracion = 950
    if (zVuelo < zMin * 0.8) {
      cuadros.push({
        transform: transformDe({ x: (previa.x + destino.x) / 2, y: (previa.y + destino.y) / 2, z: zVuelo }, vista.w, vista.h),
        offset: 0.5,
      })
      duracion = 1500
    }
    cuadros.push({ transform: fin })
    el.style.transform = fin
    animacion.current = el.animate(cuadros, { duration: duracion, easing: 'cubic-bezier(.65,0,.3,1)' })
  }, [destino, vista])

  // ---------- gestos táctiles ----------
  function inicioToque(e) {
    const t = e.touches[0]
    toque.current = { x: t.clientX, y: t.clientY }
  }
  function finToque(e) {
    if (!toque.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - toque.current.x
    const dy = t.clientY - toque.current.y
    toque.current = null
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) (dx < 0 ? siguiente : anterior)()
  }

  const seccionActual = lamina.seccion

  return (
    <div className={`escenario ${general ? 'modo-general' : ''}`} onTouchStart={inicioToque} onTouchEnd={finToque}>
      <div className="mundo" ref={mundo}>
        <Tablero laminas={laminas} seccionActual={seccionActual} />
        {laminas.map((l) => {
          const esActual = l.indice === actual
          const cerca = l.seccion === seccionActual
          const Comp = l.Comp
          return (
            <section
              key={l.id}
              className={`lamina ${l.esHub ? 'hub' : ''} ${esActual ? 'actual' : ''} ${cerca ? 'cerca' : ''}`}
              style={{ left: l.x - W / 2, top: l.y - H / 2, width: W, height: H, transform: `scale(${l.s})` }}
              aria-hidden={!esActual}
              inert={!esActual || general ? true : undefined}
              onClick={general ? () => irA(l.indice) : undefined}
            >
              <Comp paso={esActual ? paso : (l.indice < actual ? l.pasos : 0)} activa={esActual} />
            </section>
          )
        })}
      </div>

      <nav className="controles" aria-label="Controles de la presentación">
        <button onClick={anterior} aria-label="Anterior" disabled={actual === 0 && paso === 0}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="controles-info">
          <span className="controles-seccion">{secciones[seccionActual]?.corto}</span>
          <span className="controles-numero">{actual + 1} / {laminas.length}</span>
        </div>
        <button onClick={siguiente} aria-label="Siguiente" disabled={actual === laminas.length - 1 && paso === lamina.pasos}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <span className="controles-sep" />
        <button onClick={() => setGeneral((g) => !g)} aria-pressed={general} aria-label="Ver todo el recorrido (tecla O)" title="Ver todo (O)">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" /><rect x="14" y="3" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" /><rect x="3" y="14" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" /><rect x="14" y="14" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
        </button>
        <button onClick={() => setNotas((v) => !v)} aria-pressed={notas} aria-label="Notas del presentador (tecla N)" title="Notas (N)">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 4h14v16H5zM8 9h8M8 13h8M8 17h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
        <button onClick={pantallaCompleta} aria-label="Pantalla completa (tecla F)" title="Pantalla completa (F)">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </nav>

      <div className="progreso" aria-hidden="true">
        <div style={{ width: `${((actual + 1) / laminas.length) * 100}%` }} />
      </div>

      {notas && (
        <aside className="notas" aria-label="Notas del presentador">
          <strong>{lamina.titulo}</strong>
          <p>{lamina.notas || 'Sin notas para esta lámina.'}</p>
          {lamina.pasos > 0 && <small>Paso {paso} de {lamina.pasos}</small>}
        </aside>
      )}

      {general && <p className="aviso-general">Haz clic en cualquier lámina para ir a ella. Esc para volver.</p>}
    </div>
  )
}

function pantallaCompleta() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.()
  else document.exitFullscreen?.()
}

// Para que el tamaño base (1600x900) quede claro al leer estilos
export const TAMANO_BASE = { W, H }
