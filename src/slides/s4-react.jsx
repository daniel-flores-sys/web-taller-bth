import { useState } from 'react'
import Paso from '../deck/Paso'
import { crearHub } from './hub'
import { Analogia, Codigo, Icono, Lamina, Malla, Pads } from './ui'

function Problema() {
  return (
    <Lamina titulo="El problema de las páginas sueltas">
      <div className="col2 centrado-v">
        <div className="archivos" aria-hidden="true">
          {['index.html', 'menu.html', 'reservar.html', 'contacto.html', 'login.html', 'admin.html'].map((a) => (
            <div key={a} className="archivo"><span>{a}</span><code>{'<nav>…</nav>'}</code></div>
          ))}
        </div>
        <div>
          <p className="texto-grande">El mismo menú copiado en cada archivo. ¿Cambiar un enlace? Hay que editar <strong>todos</strong>, y siempre se te olvida uno.</p>
          <p className="texto-grande">Y para que la página cambie sin recargar (el "Quedan 3"), había que mover cada pedacito a mano con JavaScript o jQuery.</p>
          <Malla>6to, Diseño web responsivo y jQuery.</Malla>
        </div>
      </div>
    </Lamina>
  )
}

function QueEsReact() {
  return (
    <Lamina titulo="React: páginas hechas con piezas">
      <div className="col2 centrado-v">
        <div>
          <Pads items={[
            'Creado en Facebook por Jordan Walke y liberado gratis en 2013.',
            'Hoy lo usan Instagram, WhatsApp Web, Netflix, Airbnb…',
            'Idea central: armas la página con componentes, piezas que se reutilizan.',
            'Tú describes cómo debe verse según los datos, y React actualiza la pantalla solo.',
          ]} />
        </div>
        <div className="lego" aria-hidden="true">
          <div className="pieza-lego l-nav">Navbar</div>
          <div className="pieza-lego l-hero">Hero</div>
          <div className="pieza-lego l-card">Card</div>
          <div className="pieza-lego l-card">Card</div>
          <div className="pieza-lego l-card">Card</div>
          <div className="pieza-lego l-foot">Footer</div>
        </div>
      </div>
      <Analogia>Como el <strong>LEGO</strong>: fabricas la pieza "tarjeta" una vez y la usas todas las veces que quieras.</Analogia>
    </Lamina>
  )
}

function TarjetaDemo({ nombre, precio, quedan }) {
  return (
    <div className="tarjeta-demo-react">
      <strong>{nombre}</strong>
      <span>Bs {precio}</span>
      <span className={quedan > 0 ? 'quedan' : 'agotado'}>{quedan > 0 ? `Quedan ${quedan}` : 'Agotado'}</span>
    </div>
  )
}

function Componente() {
  return (
    <Lamina titulo="Un componente se escribe una vez…" bajada="…y se usa muchas veces con datos distintos (props).">
      <div className="col2 centrado-v">
        <Codigo>{`function Tarjeta({ nombre, precio, quedan }) {
  return (
    <div className="tarjeta">
      <strong>{nombre}</strong>
      <span>Bs {precio}</span>
      <span>Quedan {quedan}</span>
    </div>
  )
}

<Tarjeta nombre="Sopa de maní" precio={10} quedan={12} />
<Tarjeta nombre="Picante de pollo" precio={25} quedan={3} />
<Tarjeta nombre="Milanesa" precio={20} quedan={0} />`}</Codigo>
        <div className="tarjetas-demo">
          <TarjetaDemo nombre="Sopa de maní" precio={10} quedan={12} />
          <TarjetaDemo nombre="Picante de pollo" precio={25} quedan={3} />
          <TarjetaDemo nombre="Milanesa" precio={20} quedan={0} />
        </div>
      </div>
    </Lamina>
  )
}

function Estado() {
  const [cantidad, setCantidad] = useState(1)
  const precio = 20
  return (
    <Lamina titulo="Estado: la página reacciona" bajada="Pruébalo: esto es React funcionando dentro de la presentación.">
      <div className="col2 centrado-v">
        <Codigo>{`const [cantidad, setCantidad] = useState(1)

<button onClick={() => setCantidad(cantidad - 1)}>−</button>
<span>{cantidad}</span>
<button onClick={() => setCantidad(cantidad + 1)}>+</button>

<p>Total: Bs {cantidad * 20}</p>`}</Codigo>
        <div className="demo-estado">
          <p className="demo-plato">Milanesa, Bs {precio}</p>
          <div className="demo-contador">
            <button onClick={() => setCantidad(Math.max(0, cantidad - 1))} aria-label="Quitar uno">−</button>
            <output>{cantidad}</output>
            <button onClick={() => setCantidad(Math.min(9, cantidad + 1))} aria-label="Agregar uno">+</button>
          </div>
          <p className="demo-total">Total: <strong>Bs {cantidad * precio}</strong></p>
        </div>
      </div>
      <Analogia>El <strong>estado</strong> es la memoria del componente. Cuando cambia, React vuelve a dibujar solo lo necesario.</Analogia>
    </Lamina>
  )
}

const HERRAMIENTAS = [
  ['npm', 'La tienda de piezas', 'Miles de librerías gratis que instalas con un comando.'],
  ['Vite', 'El taller', 'Arma el proyecto y lo recarga al instante cada vez que guardas.'],
  ['React', 'Las piezas', 'Componentes y estado.'],
  ['React Router', 'Las puertas', 'Varias páginas: /, /reservar, /admin.'],
]

function Framework() {
  return (
    <Lamina titulo="¿Qué es un framework moderno?" bajada="Una caja de herramientas con reglas y una comunidad enorme detrás.">
      <div className="herramientas">
        {HERRAMIENTAS.map(([n, a, d]) => (
          <div key={n} className="herramienta">
            <strong>{n}</strong>
            <span className="herr-analogia">{a}</span>
            <p>{d}</p>
          </div>
        ))}
      </div>
      <Codigo>{`npm create vite@latest mi-app -- --template react
cd mi-app
npm install
npm run dev        → abre http://localhost:5173`}</Codigo>
      <Analogia>Construir con ladrillos sueltos vs. con un <strong>kit prefabricado</strong> que trae manual, piezas y herramientas.</Analogia>
    </Lamina>
  )
}

function BackendClasico({ paso }) {
  const tareas = ['Alquilar y configurar un servidor', 'Instalar y cuidar la base de datos', 'Login seguro: contraseñas cifradas, códigos por correo', 'Guardar fotos y archivos', 'Permisos: quién puede ver y editar qué', 'Copias de seguridad', 'Publicar el frontend con HTTPS']
  return (
    <Lamina titulo="Hacer un backend desde cero cuesta" bajada="Todo esto hay que construirlo y mantenerlo antes de la primera reserva.">
      <div className="col2 centrado-v">
        <ul className="checklist">
          {tareas.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <Paso desde={1} paso={paso}>
          <Analogia>Es como querer vender almuerzos y tener que <strong>construir la cocina</strong>: instalar el gas, el agua, la luz y los muebles.</Analogia>
          <p className="texto-grande">¿Y si alquilamos una cocina ya armada?</p>
        </Paso>
      </div>
    </Lamina>
  )
}

function InsForge() {
  return (
    <Lamina titulo="InsForge: el backend listo para usar" bajada="Un BaaS (Backend as a Service, backend como servicio). Código abierto y pensado para agentes de IA.">
      <div className="servicios">
        <div><Icono nombre="bd" tam={48} /><strong>Base de datos</strong><span>PostgreSQL, con SQL de verdad</span></div>
        <div><Icono nombre="candado" tam={48} /><strong>Autenticación</strong><span>Registro, login, código por correo</span></div>
        <div><Icono nombre="nube" tam={48} /><strong>Storage</strong><span>Fotos y archivos</span></div>
        <div><Icono nombre="servidor" tam={48} /><strong>Funciones</strong><span>Código propio en el servidor</span></div>
        <div><Icono nombre="cohete" tam={48} /><strong>Hosting</strong><span>Publica tu frontend con un comando</span></div>
      </div>
      <div className="col2">
        <Pads items={['El agente lo maneja por ti: tiene CLI, skills y MCP.', 'Plan gratis: 500 MB de base de datos, 1 GB de archivos, 5 GB de transferencia al mes.', 'Ojo: un proyecto gratis se pausa tras una semana sin uso (se reactiva desde el panel).']} />
        <Analogia icono="nube">La cocina <strong>ya viene armada</strong>: tú te concentras en el menú y en atender bien.</Analogia>
      </div>
    </Lamina>
  )
}

function CircuitoInsForge() {
  return (
    <Lamina titulo="El mismo circuito, con la cocina ya armada">
      <div className="circuito-simple">
        <div className="cs-nodo"><Icono nombre="navegador" tam={56} /><strong>React</strong><span>en el navegador</span></div>
        <div className="cs-pista"><span>SDK de InsForge</span><small>HTTPS + JSON</small></div>
        <div className="cs-insforge">
          <strong>InsForge</strong>
          <div className="cs-partes">
            <span><Icono nombre="candado" tam={30} />Auth</span>
            <span><Icono nombre="bd" tam={30} />Base de datos</span>
            <span><Icono nombre="nube" tam={30} />Storage</span>
          </div>
        </div>
      </div>
      <Codigo>{`// Pedir el menú de hoy desde React (un GET por detrás)
const { data } = await insforge.database
  .from('platos')
  .select('nombre, precio')
  .eq('tipo', 'segundo')`}</Codigo>
    </Lamina>
  )
}

function RLS() {
  return (
    <Lamina titulo="Seguridad en la base de datos (RLS)" bajada="Row Level Security: reglas que deciden quién puede ver o cambiar cada fila.">
      <div className="col2 centrado-v">
        <Codigo>{`-- Cada cliente ve SOLO sus reservas;
-- el dueño ve todas
CREATE POLICY ver_reservas ON reservas
  FOR SELECT USING (
    usuario_id = auth.uid()
    OR es_admin()
  );`}</Codigo>
        <Pads items={[
          'Aunque alguien cambie el frontend, la base de datos dice que no.',
          'Solo el dueño puede crear platos o marcar una entrega.',
          'La regla del stock también vive aquí: dos personas no pueden llevarse la última milanesa.',
        ]} />
      </div>
      <Analogia icono="candado">Es el <strong>guardia en la puerta de la cocina</strong>: revisa a cada persona, no importa por dónde entre.</Analogia>
    </Lamina>
  )
}

export default {
  id: 'react',
  titulo: 'React y el backend listo',
  corto: '4. React e InsForge',
  hub: {
    Comp: crearHub({ numero: 4, titulo: 'React y el backend listo', bajada: 'Piezas reutilizables en el frontend y una cocina ya armada en el backend.', malla: 'Desarrollo de aplicaciones web cliente-servidor, conectividad a bases de datos.' }),
  },
  hijos: [
    { id: 'problema', titulo: 'Páginas sueltas', Comp: Problema },
    { id: 'react', titulo: 'Qué es React', Comp: QueEsReact },
    { id: 'componente', titulo: 'Componentes', Comp: Componente },
    { id: 'estado', titulo: 'Estado', Comp: Estado, notas: 'Este contador funciona de verdad: haz clic en + y −.' },
    { id: 'framework', titulo: 'Framework moderno', Comp: Framework },
    { id: 'backend-clasico', titulo: 'Backend desde cero', Comp: BackendClasico, pasos: 1 },
    { id: 'insforge', titulo: 'InsForge', Comp: InsForge },
    { id: 'circuito-insforge', titulo: 'Circuito con InsForge', Comp: CircuitoInsForge, notas: 'Compara con el circuito de la sección 1: servidor y base de datos ahora son InsForge.' },
    { id: 'rls', titulo: 'RLS', Comp: RLS },
  ],
}
