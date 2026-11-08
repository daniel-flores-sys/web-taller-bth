import Paso from '../deck/Paso'
import { crearHub } from './hub'
import { Analogia, Codigo, Icono, Lamina, Malla, Pads } from './ui'

function FrontBack({ paso }) {
  return (
    <Lamina titulo="Frontend y backend" bajada="Toda app tiene dos caras. En la pensión: el salón y la cocina.">
      <div className="col2 frontback">
        <div className="cara cara-front">
          <h3>Frontend</h3>
          <p className="cara-sub">El salón: lo que el cliente ve y toca</p>
          <Pads items={['Botones, colores, formularios, animaciones.', 'Corre en el navegador (tu celular).', 'HTML, CSS, JavaScript, React.']} />
          <p className="cara-ejemplo">El botón "Reservar" y el contador + / −</p>
        </div>
        <Paso desde={1} paso={paso} className="cara cara-back">
          <h3>Backend</h3>
          <p className="cara-sub">La cocina: reglas, seguridad y datos</p>
          <Pads items={['Revisa, calcula, guarda y protege.', 'Corre en el servidor (la nube).', 'Node, PHP, Python, Java + SQL.']} />
          <p className="cara-ejemplo">Revisar que queden milanesas y guardar la reserva</p>
        </Paso>
      </div>
    </Lamina>
  )
}

function NoConfies({ paso }) {
  return (
    <Lamina titulo="Nunca confíes en el frontend">
      <div className="col2 centrado-v">
        <div>
          <p className="texto-grande">Cualquiera puede abrir las herramientas del navegador (F12) y <strong>cambiar el frontend</strong>: quitar un límite, cambiar un precio, activar un botón desactivado.</p>
          <Paso desde={1} paso={paso}>
            <p className="texto-grande">Si el stock solo se revisara en el celular, alguien podría reservar <strong>100 milanesas</strong>.</p>
          </Paso>
        </div>
        <Paso desde={2} paso={paso}>
          <div className="regla">
            <Icono nombre="candado" tam={56} />
            <p>Las reglas importantes van en el <strong>backend</strong>:</p>
            <Pads items={['¿Quedan platos?', '¿Ya pasó la hora límite (12:00)?', '¿Esta persona es el dueño?', '¿Cuánto cuesta en total?']} />
          </div>
        </Paso>
      </div>
      <Analogia>El mesero puede anotar lo que quieras, pero <strong>la cocina decide</strong> si hay o no hay.</Analogia>
    </Lamina>
  )
}

function HTTPIdioma() {
  return (
    <Lamina titulo="HTTP: el idioma entre cliente y servidor" bajada="Cada petición es una frase corta: un verbo + una dirección.">
      <div className="frase-http">
        <span className="fh-verbo">GET<small>verbo: qué quieres hacer</small></span>
        <span className="fh-ruta">/platos<small>dirección: sobre qué cosa</small></span>
      </div>
      <div className="col2">
        <Analogia>Como en el restaurante: <strong>"Tráigame</strong> el menú", <strong>"Anote</strong> mi pedido", <strong>"Cancele</strong> mi pedido".</Analogia>
        <Pads items={['HTTP: HyperText Transfer Protocol.', 'HTTPS: la versión con candado (cifrada). Hoy es obligatoria.']} />
      </div>
    </Lamina>
  )
}

const VERBOS = [
  ['GET', 'Leer', 'Ver el menú de hoy', 'GET /platos', 'SELECT'],
  ['POST', 'Crear', 'Hacer una reserva nueva', 'POST /reservas', 'INSERT'],
  ['PATCH', 'Modificar una parte', 'Cambiar el precio de un plato', 'PATCH /platos/7', 'UPDATE'],
  ['PUT', 'Reemplazar todo', 'Reescribir el plato entero', 'PUT /platos/7', 'UPDATE'],
  ['DELETE', 'Borrar', 'Quitar un plato del menú', 'DELETE /platos/7', 'DELETE'],
]

function Verbos({ paso }) {
  return (
    <Lamina titulo="Los verbos HTTP" bajada="Con estos cinco se construye casi cualquier app.">
      <table className="tabla tabla-verbos">
        <thead>
          <tr><th>Verbo</th><th>Significa</th><th>En la pensión</th><th>Petición</th><th>En SQL</th></tr>
        </thead>
        <tbody>
          {VERBOS.map(([v, s, e, p, sql], i) => (
            <Paso key={v} como="tr" desde={i === 0 ? 0 : 1} paso={paso}>
              <td><span className={`verbo verbo-${v.toLowerCase()}`}>{v}</span></td>
              <td>{s}</td>
              <td>{e}</td>
              <td><code>{p}</code></td>
              <td><code>{sql}</code></td>
            </Paso>
          ))}
        </tbody>
      </table>
      <Paso desde={2} paso={paso}>
        <p className="crud"><strong>CRUD</strong> = Create, Read, Update, Delete = crear, leer, actualizar, borrar. Pídele a la IA "un CRUD de platos" y sabrá exactamente qué hacer.</p>
      </Paso>
    </Lamina>
  )
}

const CODIGOS = [
  ['200', 'OK', 'Todo bien, aquí está.', 'ok'],
  ['201', 'Created', 'Listo, tu reserva fue creada.', 'ok'],
  ['301', 'Moved', 'Esto se mudó, ve a esta otra dirección.', 'info'],
  ['400', 'Bad Request', 'Pediste mal (faltan datos).', 'tuyo'],
  ['401', 'Unauthorized', 'No sé quién eres: inicia sesión.', 'tuyo'],
  ['403', 'Forbidden', 'Sé quién eres, pero no puedes (un cliente entrando al panel del dueño).', 'tuyo'],
  ['404', 'Not Found', 'Eso no existe.', 'tuyo'],
  ['500', 'Server Error', 'Se quemó algo en la cocina.', 'suyo'],
]

function Codigos() {
  return (
    <Lamina titulo="Códigos de estado: cómo salió el pedido">
      <div className="codigos">
        {CODIGOS.map(([n, en, es, tipo]) => (
          <div key={n} className={`codigo-estado ce-${tipo}`}>
            <span className="ce-num">{n}</span>
            <span className="ce-en">{en}</span>
            <span className="ce-es">{es}</span>
          </div>
        ))}
      </div>
      <p className="familias"><span className="ce-ok">2xx salió bien</span><span className="ce-info">3xx ve a otro lado</span><span className="ce-tuyo">4xx error del cliente</span><span className="ce-suyo">5xx error del servidor</span></p>
    </Lamina>
  )
}

function JSONLamina() {
  return (
    <Lamina titulo="JSON: así viajan los datos" bajada="Un formato de texto que entienden todos los lenguajes. Se lee como una ficha.">
      <div className="col2 centrado-v">
        <Codigo className="codigo-grande">{`{
  "nombre": "Sopa de maní",
  "tipo": "sopa",
  "precio": 10,
  "quedan": 12,
  "foto": "https://…/sopa.jpg"
}`}</Codigo>
        <div>
          <Pads items={['Llaves { } encierran un objeto (una ficha).', '"campo": valor, separados por comas.', 'Textos entre comillas, números sin comillas.', 'Corchetes [ ] para listas: varios platos.']} />
          <Analogia icono="receta">Es como llenar un <strong>formulario</strong>: cada campo tiene su nombre y su respuesta.</Analogia>
        </div>
      </div>
    </Lamina>
  )
}

function BaseDatos() {
  return (
    <Lamina titulo="La base de datos: tablas con reglas" bajada="Como hojas de Excel, pero que se conectan entre sí y no aceptan datos inválidos.">
      <div className="tablas-bd">
        <table className="tabla tabla-bd">
          <caption>platos</caption>
          <thead><tr><th>id</th><th>nombre</th><th>tipo</th><th>precio</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Sopa de maní</td><td>sopa</td><td>10</td></tr>
            <tr><td>2</td><td>Picante de pollo</td><td>segundo</td><td>25</td></tr>
            <tr><td>3</td><td>Milanesa</td><td>segundo</td><td>20</td></tr>
          </tbody>
        </table>
        <div className="relacion" aria-hidden="true"><span>plato_id</span></div>
        <table className="tabla tabla-bd">
          <caption>reserva_items</caption>
          <thead><tr><th>reserva</th><th>plato_id</th><th>cantidad</th></tr></thead>
          <tbody>
            <tr><td>15</td><td>1</td><td>1</td></tr>
            <tr><td>15</td><td>3</td><td>1</td></tr>
            <tr><td>15</td><td>2</td><td>1</td></tr>
          </tbody>
        </table>
      </div>
      <p className="nota-pie">La reserva 15 es: 1 sopa de maní, 1 milanesa y 1 picante. Las tablas se unen por el <strong>id</strong> (la clave).</p>
      <Malla>6to, Modelo entidad-relación, claves, lenguaje SQL.</Malla>
    </Lamina>
  )
}

function DevTools() {
  return (
    <Lamina titulo="Míralo con tus propios ojos" bajada="En una computadora, cualquier página te deja ver sus peticiones.">
      <div className="col2 centrado-v">
        <ol className="pasos-numerados">
          <li>Abre cualquier página en Chrome o Edge.</li>
          <li>Presiona <kbd>F12</kbd> (o clic derecho y "Inspeccionar").</li>
          <li>Ve a la pestaña <strong>Network</strong> (Red).</li>
          <li>Recarga la página con <kbd>F5</kbd>.</li>
          <li>Cada fila es una petición: mira el verbo, el código y el tiempo.</li>
        </ol>
        <div className="mini-devtools" aria-hidden="true">
          <div className="md-cab"><span>Nombre</span><span>Método</span><span>Estado</span><span>Tiempo</span></div>
          <div><span>menu</span><span>GET</span><span className="ok">200</span><span>84 ms</span></div>
          <div><span>platos?dia=1</span><span>GET</span><span className="ok">200</span><span>120 ms</span></div>
          <div><span>sopa.jpg</span><span>GET</span><span className="ok">200</span><span>45 ms</span></div>
          <div><span>reservas</span><span>POST</span><span className="ok">201</span><span>210 ms</span></div>
          <div><span>admin</span><span>GET</span><span className="mal">403</span><span>30 ms</span></div>
        </div>
      </div>
    </Lamina>
  )
}

export default {
  id: 'http',
  titulo: 'Frontend, backend y HTTP',
  corto: '2. Frontend, backend y HTTP',
  hub: {
    Comp: crearHub({ numero: 2, titulo: 'Frontend, backend y HTTP', bajada: 'Las dos caras de una app y el idioma con el que hablan.', malla: 'Aplicaciones web cliente-servidor, base de datos, SQL.' }),
  },
  hijos: [
    { id: 'front-back', titulo: 'Frontend y backend', Comp: FrontBack, pasos: 1 },
    { id: 'no-confies', titulo: 'Nunca confíes en el frontend', Comp: NoConfies, pasos: 2, notas: 'Pregunta antes del paso 2: ¿qué pasaría si el límite de platos solo estuviera en el botón?' },
    { id: 'http', titulo: 'HTTP', Comp: HTTPIdioma },
    { id: 'verbos', titulo: 'Verbos HTTP', Comp: Verbos, pasos: 2 },
    { id: 'codigos', titulo: 'Códigos de estado', Comp: Codigos, notas: 'El 404 ya lo conocen. Pregunta: ¿qué código daría si un cliente intenta abrir /admin?' },
    { id: 'json', titulo: 'JSON', Comp: JSONLamina },
    { id: 'base-datos', titulo: 'Base de datos', Comp: BaseDatos },
    { id: 'devtools', titulo: 'Míralo tú', Comp: DevTools, notas: 'Si hay proyector y compu, hazlo en vivo con la app de la pensión.' },
  ],
}
