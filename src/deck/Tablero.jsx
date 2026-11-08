import { memo } from 'react'
import { H, W, limitesHub, limitesTablero } from './layout'

// Pistas de cobre: unen los chips (secciones) y, dentro de cada chip, las láminas en orden.
function Tablero({ laminas, seccionActual }) {
  const b = limitesTablero(laminas)
  const pad = 3000
  const vb = { x: b.x0 - pad, y: b.y0 - pad, w: b.x1 - b.x0 + pad * 2, h: b.y1 - b.y0 + pad * 2 }
  const hubs = laminas.filter((l) => l.esHub)

  const pistasHub = []
  for (let i = 0; i < hubs.length - 1; i++) {
    const a = limitesHub(hubs[i])
    const c = limitesHub(hubs[i + 1])
    let d
    if (Math.abs(hubs[i].y - hubs[i + 1].y) < 1) {
      // misma fila
      const haciaDerecha = hubs[i + 1].x > hubs[i].x
      const x0 = haciaDerecha ? a.x1 : a.x0
      const x1 = haciaDerecha ? c.x0 : c.x1
      const offs = [-1100, 0, 1100]
      d = offs.map((o) => `M${x0} ${hubs[i].y + o} H${x1}`).join(' ')
    } else {
      // bajando a la otra fila
      const offs = [-1400, 0, 1400]
      d = offs.map((o) => `M${hubs[i].x + o} ${a.y1} V${c.y0}`).join(' ')
    }
    pistasHub.push({ d, activa: seccionActual === i || seccionActual === i + 1, key: i })
  }

  // Pistas internas (lámina a lámina, en ángulo recto)
  const internas = []
  hubs.forEach((hub) => {
    const hijos = laminas.filter((l) => l.seccion === hub.seccion && !l.esHub)
    for (let i = 0; i < hijos.length - 1; i++) {
      const p = hijos[i]
      const q = hijos[i + 1]
      if (Math.abs(p.y - q.y) < 1) {
        internas.push(`M${p.x + W / 2} ${p.y} H${q.x - W / 2}`)
      } else {
        const ym = p.y + H / 2 + 85
        internas.push(`M${p.x} ${p.y + H / 2} V${ym} H${q.x} V${q.y - H / 2}`)
      }
    }
    if (hijos[0]) {
      const h = limitesHub(hub)
      internas.push(`M${h.x0 + 200} ${hijos[0].y} H${hijos[0].x - W / 2}`)
    }
  })

  return (
    <svg className="tablero" style={{ left: vb.x, top: vb.y, width: vb.w, height: vb.h }} viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`} aria-hidden="true">
      <defs>
        <pattern id="puntos" width="400" height="400" patternUnits="userSpaceOnUse">
          <circle cx="200" cy="200" r="14" className="perforacion" />
        </pattern>
      </defs>
      <rect x={vb.x} y={vb.y} width={vb.w} height={vb.h} fill="url(#puntos)" />
      {pistasHub.map((p) => (
        <path key={p.key} d={p.d} className={`pista pista-gruesa ${p.activa ? 'activa' : ''}`} />
      ))}
      {internas.map((d, i) => <path key={i} d={d} className="pista pista-fina" />)}
      {hubs.map((hub) => {
        const h = limitesHub(hub)
        const pines = []
        for (let x = h.x0 + 500; x < h.x1 - 300; x += 520) {
          pines.push(<rect key={`t${x}`} x={x} y={h.y0 - 180} width="200" height="180" rx="30" className="pin" />)
          pines.push(<rect key={`b${x}`} x={x} y={h.y1} width="200" height="180" rx="30" className="pin" />)
        }
        return <g key={hub.id}>{pines}</g>
      })}
    </svg>
  )
}

export default memo(Tablero)
