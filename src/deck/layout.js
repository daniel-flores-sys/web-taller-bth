// Ubica cada lámina en el "tablero" (una placa de circuito gigante).
// Cada sección es un chip grande (hub); sus láminas van dentro, en filas.
// Las secciones siguen un recorrido en U, como una pista de cobre.

export const W = 1600
export const H = 900
const HUB_MIN = 4.8 // tamaño mínimo del chip respecto a una lámina
const BANDA = 0.25 // parte de arriba del chip reservada para su título
const GAP = 2200
const GAP_X = 200
const GAP_Y = 170
const MARGEN_X = 340
const MARGEN_Y = 160

// Recorrido: fila de arriba de izquierda a derecha, fila de abajo de derecha a izquierda
const RECORRIDO = [[0, 0], [1, 0], [2, 0], [3, 0], [3, 1], [2, 1], [1, 1], [0, 1]]

function columnasPara(n) {
  if (n <= 4) return n
  if (n <= 12) return 4
  return 5
}

function escalaHub(n) {
  const cols = columnasPara(n)
  const filas = Math.ceil(n / cols)
  const ancho = cols * W + (cols - 1) * GAP_X + MARGEN_X * 2
  const alto = (filas * H + (filas - 1) * GAP_Y + MARGEN_Y * 2) / (1 - BANDA)
  // Secciones con pocas láminas usan un chip más chico para que no se vean vacías
  const minimo = n <= 3 ? 3.4 : HUB_MIN
  return Math.max(minimo, ancho / W, alto / H)
}

export function construirLaminas(secciones) {
  const sMax = Math.max(...secciones.map((s) => escalaHub(s.hijos.length)))
  const pasoX = W * sMax + GAP
  const pasoY = H * sMax + GAP
  const laminas = []

  secciones.forEach((sec, si) => {
    const [c, f] = RECORRIDO[si]
    const cx = c * pasoX
    const cy = f * pasoY
    const s = escalaHub(sec.hijos.length)
    const HH = H * s
    laminas.push({
      ...sec.hub,
      id: sec.id,
      seccion: si,
      esHub: true,
      titulo: sec.titulo,
      x: cx, y: cy, s,
      pasos: sec.hub.pasos ?? 0,
    })

    const n = sec.hijos.length
    const cols = columnasPara(n)
    const filas = Math.ceil(n / cols)
    const altoGrid = filas * H + (filas - 1) * GAP_Y
    const zonaTop = cy - HH / 2 + HH * BANDA
    const top = zonaTop + (HH * (1 - BANDA) - altoGrid) / 2
    sec.hijos.forEach((hijo, i) => {
      const fila = Math.floor(i / cols)
      const enFila = Math.min(cols, n - fila * cols)
      const col = i % cols
      const anchoFila = enFila * W + (enFila - 1) * GAP_X
      const x = cx - anchoFila / 2 + col * (W + GAP_X) + W / 2
      const y = top + fila * (H + GAP_Y) + H / 2
      laminas.push({ ...hijo, seccion: si, esHub: false, x, y, s: 1, pasos: hijo.pasos ?? 0 })
    })
  })
  return laminas.map((l, i) => ({ ...l, indice: i }))
}

export function limitesHub(l) {
  return { x0: l.x - (W * l.s) / 2, y0: l.y - (H * l.s) / 2, x1: l.x + (W * l.s) / 2, y1: l.y + (H * l.s) / 2 }
}

export function limitesTablero(laminas) {
  const hubs = laminas.filter((l) => l.esHub).map(limitesHub)
  return {
    x0: Math.min(...hubs.map((b) => b.x0)),
    y0: Math.min(...hubs.map((b) => b.y0)),
    x1: Math.max(...hubs.map((b) => b.x1)),
    y1: Math.max(...hubs.map((b) => b.y1)),
  }
}

// Cámara que encuadra una lámina en una ventana de vw x vh
export function camaraPara(l, vw, vh) {
  const margen = l.esHub ? 0.97 : 0.93
  const ajuste = Math.min(vw / W, vh / H) * margen
  return { x: l.x, y: l.y, z: ajuste / l.s }
}

export function camaraGeneral(laminas, vw, vh) {
  const b = limitesTablero(laminas)
  const bw = b.x1 - b.x0 + 1200
  const bh = b.y1 - b.y0 + 1200
  return { x: (b.x0 + b.x1) / 2, y: (b.y0 + b.y1) / 2, z: Math.min(vw / bw, vh / bh) }
}

export function transformDe(c, vw, vh) {
  return `translate(${vw / 2}px, ${vh / 2}px) scale(${c.z}) translate(${-c.x}px, ${-c.y}px)`
}
