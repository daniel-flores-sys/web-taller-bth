import { Icono } from './ui'

// Diagrama tipo circuito: del navegador a la base de datos y de vuelta.
// Cada paso mueve un "paquete" por una pista. Amarillo = va (petición). Celeste = vuelve (respuesta).

const PISTAS = {
  dnsIda: 'M120 222 V58 H470',
  dnsVuelta: 'M470 104 H160 V222',
  ida: 'M232 286 H1010',
  vuelta: 'M1010 334 H232',
  bdIda: 'M1150 286 H1232',
  bdVuelta: 'M1232 334 H1150',
}

export const PASOS_CIRCUITO = [
  { texto: 'Cinco piezas trabajan juntas. Sigamos un pedido de principio a fin.', viaja: null },
  { texto: 'Escribes pension.bo/menu en el navegador y presionas Enter.', viaja: null, nodo: 'nav' },
  { texto: 'Tu navegador no sabe dónde vive "pension.bo". Le pregunta al DNS, la agenda de internet.', viaja: '¿Cuál es la IP de pension.bo?', pista: 'dnsIda', tipo: 'ida' },
  { texto: 'El DNS responde con el número (la IP) del servidor.', viaja: 'pension.bo = 104.21.33.7', pista: 'dnsVuelta', tipo: 'vuelta' },
  { texto: 'Ahora sí: la PETICIÓN (request) viaja por internet hasta el servidor.', viaja: 'GET /menu   + cookie de sesión', pista: 'ida', tipo: 'ida' },
  { texto: 'El servidor necesita los platos de hoy. Se los pide a la base de datos en SQL.', viaja: "SELECT nombre, precio FROM platos WHERE dia = 'lunes'", pista: 'bdIda', tipo: 'ida' },
  { texto: 'La base de datos devuelve las filas que encontró.', viaja: '3 filas: Sopa de maní, Picante de pollo, Milanesa', pista: 'bdVuelta', tipo: 'vuelta' },
  { texto: 'El servidor arma la RESPUESTA (response) y la manda de vuelta.', viaja: '200 OK   + HTML / JSON con el menú', pista: 'vuelta', tipo: 'vuelta' },
  { texto: 'Tu navegador lee el HTML, CSS y JS y "pinta" la página. Todo pasó en menos de un segundo.', viaja: null, nodo: 'nav' },
]

const NODOS = [
  { id: 'nav', x: 40, y: 222, w: 192, h: 160, icono: 'navegador', titulo: 'Navegador', sub: 'Cliente (tu celular)' },
  { id: 'dns', x: 470, y: 18, w: 210, h: 120, icono: 'agenda', titulo: 'DNS', sub: 'Agenda de internet' },
  { id: 'net', x: 520, y: 248, w: 220, h: 124, icono: 'globo', titulo: 'Internet', sub: 'Cables y routers', nube: true },
  { id: 'srv', x: 1010, y: 222, w: 140, h: 160, icono: 'servidor', titulo: 'Servidor', sub: 'La cocina' },
  { id: 'bd', x: 1232, y: 222, w: 170, h: 160, icono: 'bd', titulo: 'Base de datos', sub: 'La despensa' },
]

export default function Circuito({ paso }) {
  const p = PASOS_CIRCUITO[Math.min(paso, PASOS_CIRCUITO.length - 1)]
  const activo = (id) =>
    p.nodo === id ||
    (p.pista?.startsWith('dns') && (id === 'dns' || id === 'nav')) ||
    ((p.pista === 'ida' || p.pista === 'vuelta') && (id === 'nav' || id === 'srv' || id === 'net')) ||
    (p.pista?.startsWith('bd') && (id === 'srv' || id === 'bd'))

  return (
    <div className="circuito">
      <div className="circuito-placa">
        <svg viewBox="0 0 1440 400" className="circuito-svg" aria-hidden="true">
          {Object.entries(PISTAS).map(([k, d]) => (
            <path key={k} d={d} className={`c-pista ${k.toLowerCase().includes('vuelta') ? 'c-vuelta' : 'c-ida'} ${p.pista === k ? 'viva' : ''}`} />
          ))}
          {p.pista && (
            <circle key={paso} r="14" className={`paquete paquete-${p.tipo}`}>
              <animateMotion dur="1.2s" fill="freeze" path={PISTAS[p.pista]} calcMode="spline" keyTimes="0;1" keySplines=".6 0 .3 1" />
            </circle>
          )}
        </svg>
        {NODOS.map((n) => (
          <div
            key={n.id}
            className={`c-nodo ${n.nube ? 'c-nube' : ''} ${activo(n.id) ? 'activo' : ''}`}
            style={{ left: n.x, top: n.y, width: n.w, height: n.h }}
          >
            <Icono nombre={n.icono} tam={48} />
            <strong>{n.titulo}</strong>
            <span>{n.sub}</span>
          </div>
        ))}
        <div className="c-leyenda">
          <span><i className="punto-ida" /> va (petición)</span>
          <span><i className="punto-vuelta" /> vuelve (respuesta)</span>
        </div>
      </div>

      <div className="circuito-pie">
        <span className="circuito-num">{paso === 0 ? '' : paso}</span>
        <div>
          <p className="circuito-texto">{p.texto}</p>
          {p.viaja && <code className={`circuito-viaja viaja-${p.tipo}`}>{p.viaja}</code>}
        </div>
      </div>
    </div>
  )
}
