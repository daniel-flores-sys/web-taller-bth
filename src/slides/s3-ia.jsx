import Paso from '../deck/Paso'
import { crearHub } from './hub'
import { Analogia, Boceto, Codigo, Icono, Lamina, Pads } from './ui'

function Cambio({ paso }) {
  return (
    <Lamina titulo="La IA cambió cómo se hacen las webs">
      <div className="col2 comparacion">
        <div className="lado lado-antes">
          <h3>Antes</h3>
          <Pads items={['Escribir cada línea a mano.', 'Buscar el error en Google durante horas.', 'Un formulario con validación: una tarde entera.']} />
        </div>
        <div className="lado lado-ahora">
          <h3>Ahora</h3>
          <Pads items={['Describes lo que quieres y la IA escribe un borrador en segundos.', 'Le pegas el error y te explica la causa.', 'El formulario: 2 minutos… si sabes pedirlo.']} />
        </div>
      </div>
      <Paso desde={1} paso={paso}>
        <Analogia icono="persona">La IA es un <strong>albañil rapidísimo</strong> que nunca vio tu obra. Tú eres el <strong>maestro de obra</strong>: decides qué se construye, revisas y corriges.</Analogia>
      </Paso>
    </Lamina>
  )
}

function ChatAgente() {
  return (
    <Lamina titulo="Chat o agente: dos formas de usar la IA">
      <div className="col2">
        <div className="bloque-concepto">
          <Icono nombre="persona" tam={60} />
          <h3>Chat</h3>
          <p className="cara-sub">Gemini o ChatGPT en el celular</p>
          <Pads items={['Te responde con texto y código.', 'Tú copias, pegas y pruebas.', 'No ve tus archivos ni tu proyecto.']} />
          <Analogia>Un <strong>consejero por teléfono</strong>: te dice qué hacer, pero no toca nada.</Analogia>
        </div>
        <div className="bloque-concepto">
          <Icono nombre="robot" tam={60} />
          <h3>Agente</h3>
          <p className="cara-sub">OpenCode, Claude Code, Cursor</p>
          <Pads items={['Trabaja dentro de tu carpeta.', 'Lee, crea y edita archivos.', 'Ejecuta comandos y prueba si funciona.']} />
          <Analogia>Un <strong>ayudante en tu taller</strong>: usa tus herramientas mientras tú supervisas.</Analogia>
        </div>
      </div>
    </Lamina>
  )
}

function OpenCode() {
  return (
    <Lamina titulo="OpenCode: un agente gratuito" bajada="Código abierto, funciona en la terminal o como app de escritorio, y trae modelos gratis.">
      <div className="col2 centrado-v">
        <div>
          <p className="etiqueta-paso">1. Instalar (una sola vez, necesita Node.js)</p>
          <Codigo>npm install -g opencode-ai</Codigo>
          <p className="etiqueta-paso">2. Abrir dentro de la carpeta de tu proyecto</p>
          <Codigo>{`cd mi-proyecto
opencode`}</Codigo>
          <p className="etiqueta-paso">3. Escribir tu pedido, igual que en un chat</p>
        </div>
        <div>
          <Pads items={[
            'Gratis: incluye modelos sin costo (la lista cambia con el tiempo).',
            'Necesita una computadora, aunque no sea potente: la IA corre en la nube, no en tu máquina.',
            'Todo lo que veremos sobre cómo pedir sirve igual para Gemini en tu celular.',
          ]} />
          <p className="nota-pie">Instrucciones actualizadas en opencode.ai</p>
        </div>
      </div>
    </Lamina>
  )
}

function MaloBueno({ paso }) {
  return (
    <Lamina titulo="No basta pedir: hay que saber qué pedir">
      <div className="col2">
        <div className="prompt prompt-malo">
          <p className="prompt-etiqueta">Pedido vago</p>
          <p className="prompt-texto">"Hazme una página bonita para un restaurante."</p>
          <p className="prompt-resultado">La IA inventa todo: el nombre, los colores, los platos, las secciones. Sale genérica y luego no sabes cómo cambiarla.</p>
        </div>
        <Paso desde={1} paso={paso} className="prompt prompt-bueno">
          <p className="prompt-etiqueta">Pedido preciso</p>
          <p className="prompt-texto">"Crea una <b>landing page</b> para la Pensión Doña Rosa (almuerzos en Bolivia). Arriba un <b>navbar</b> con logo y botón <b>Ingresar</b>. Un <b>hero</b> con el título 'Tu almuerzo apartado' y un botón <b>CTA</b> rojo 'Reservar'. Debajo, una <b>grid</b> de <b>cards</b> con foto, nombre, precio en Bs y una <b>badge</b> 'Quedan 5'. Que sea <b>responsive</b>: 1 columna en celular, 3 en computadora."</p>
        </Paso>
      </div>
      <Paso desde={2} paso={paso}>
        <Analogia>Pedirle a la IA es como pedirle al <strong>sastre</strong>: si solo dices "hazme ropa", te hace lo que él quiere.</Analogia>
      </Paso>
    </Lamina>
  )
}

const PIEZAS = [
  ['Contexto', 'Quién eres y para qué es.', '"Soy estudiante, es para la pensión de mi barrio…"'],
  ['Objetivo', 'Qué página o componente quieres.', '"Una landing page" / "un modal para confirmar"'],
  ['Contenido', 'Los datos reales.', '"Platos: sopa de maní Bs 10, milanesa Bs 20"'],
  ['Aspecto', 'Cómo se ve.', '"Fondo claro, botón principal rojo, bordes redondeados"'],
  ['Comportamiento', 'Qué pasa al usarlo.', '"Al tocar Reservar se abre un modal con el resumen"'],
  ['Límites', 'Qué NO hacer y con qué tecnología.', '"Usa React. No agregues secciones extra."'],
]

function Formula({ paso }) {
  return (
    <Lamina titulo="La receta de un buen pedido" bajada="No siempre necesitas las seis, pero cuantas más uses, menos adivina la IA.">
      <div className="formula">
        {PIEZAS.map(([t, d, e], i) => (
          <Paso key={t} desde={Math.max(0, i - 1)} paso={paso} className="pieza">
            <strong>{t}</strong>
            <span>{d}</span>
            <em>{e}</em>
          </Paso>
        ))}
      </div>
    </Lamina>
  )
}

function Vocabulario({ titulo, bajada, items }) {
  return (
    <Lamina titulo={titulo} bajada={bajada} className="lamina-vocab">
      <div className={`vocab vocab-${items.length}`}>
        {items.map(([tipo, en, es, uso]) => (
          <figure key={en} className="vocab-item">
            <Boceto tipo={tipo} />
            <figcaption>
              <strong>{en}</strong>
              <span className="vocab-es">{es}</span>
              <span className="vocab-uso">{uso}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Lamina>
  )
}

const V_ESTRUCTURA = [
  ['landing', 'Landing page', 'página de aterrizaje', 'La portada que presenta y convence.'],
  ['navbar', 'Navbar', 'barra de navegación', 'Arriba: logo y enlaces.'],
  ['hero', 'Hero', 'bloque principal', 'Lo primero que ves: título grande y botón.'],
  ['footer', 'Footer', 'pie de página', 'Abajo: contacto, redes, datos.'],
  ['sidebar', 'Sidebar', 'barra lateral', 'Menú al costado, típico de paneles.'],
  ['dashboard', 'Dashboard', 'panel de control', 'Cifras, gráficos y tablas para administrar.'],
  ['grid', 'Grid', 'rejilla', 'Elementos ordenados en filas y columnas.'],
  ['table', 'Table', 'tabla', 'Datos en filas, como las reservas del día.'],
]

const V_COMPONENTES = [
  ['card', 'Card', 'tarjeta', 'Caja con foto, título y datos.'],
  ['modal', 'Modal', 'ventana emergente', 'Aparece encima y oscurece el fondo.'],
  ['toast', 'Toast', 'aviso flotante', 'Mensaje corto que se va solo.'],
  ['dropdown', 'Dropdown', 'menú desplegable', 'Una lista que se abre al tocar.'],
  ['tabs', 'Tabs', 'pestañas', 'Cambiar de vista sin cambiar de página.'],
  ['carousel', 'Carousel', 'carrusel', 'Imágenes que pasan de lado.'],
  ['badge', 'Badge', 'etiqueta', 'Chip pequeño: "Agotado", "Nuevo".'],
  ['accordion', 'Accordion', 'acordeón', 'Secciones que se abren y cierran.'],
]

const V_FLUJOS = [
  ['login', 'Login / Sign in', 'iniciar sesión', 'Correo y contraseña.'],
  ['form', 'Sign up / Register', 'registro', 'Crear una cuenta nueva.'],
  ['form', 'Form + validation', 'formulario con validación', 'Avisa si falta un dato antes de enviar.'],
  ['drag', 'Drag & drop', 'arrastrar y soltar', 'Subir una foto arrastrándola.'],
  ['skeleton', 'Loading / Skeleton', 'estado de carga', 'Lo que se ve mientras llegan los datos.'],
  ['card', 'Empty state', 'estado vacío', 'Qué mostrar cuando no hay nada.'],
  ['table', 'CRUD', 'crear, leer, editar, borrar', 'Todo lo necesario para administrar algo.'],
  ['dashboard', 'Admin panel', 'panel de administración', 'Solo para el dueño, en otra ruta.'],
]

const ESTILO = [
  ['Responsive', 'Se adapta a celular, tablet y computadora.'],
  ['Mobile first', 'Diseñar primero para celular.'],
  ['Dark mode', 'Modo oscuro.'],
  ['Paleta de colores', 'Los 4 o 5 colores de la marca (#C2321C).'],
  ['Tipografía', 'La letra: tamaño, grosor, familia.'],
  ['Padding / margin', 'Espacio adentro / afuera de una caja.'],
  ['Border radius', 'Qué tan redondeadas son las esquinas.'],
  ['Shadow', 'Sombra para dar profundidad.'],
  ['Hover', 'Cómo cambia al pasar el mouse.'],
  ['Transition', 'Cambio suave, sin saltos.'],
  ['Contraste', 'Que el texto se lea bien sobre el fondo.'],
  ['Spacing consistente', 'Mismos espacios en toda la página.'],
]

function Estilo() {
  return (
    <Lamina titulo="Palabras para describir cómo se ve" bajada="Así le hablas a la IA como un diseñador.">
      <dl className="estilo">
        {ESTILO.map(([t, d]) => (
          <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
        ))}
      </dl>
    </Lamina>
  )
}

function EjemploReal() {
  return (
    <Lamina titulo="Un pedido real del panel del dueño">
      <div className="col2">
        <Codigo className="codigo-prompt">{`En el panel de administración (ruta /admin),
crea la sección "Platos":

- Un botón "Nuevo plato" que abre un MODAL.
- En el modal, un FORMULARIO con: nombre,
  tipo (sopa o segundo, como TABS), descripción,
  precio en Bs (opcional: si queda vacío
  usa el precio por defecto de Ajustes).
- Una zona de DRAG & DROP para la foto,
  con vista previa. Máximo 5 MB.
- Al guardar, sube la foto al storage,
  guarda el plato y muestra un TOAST
  "Plato creado".
- Los platos se ven en una GRID de CARDS.
- RESPONSIVE: el modal ocupa toda la
  pantalla en celular.`}</Codigo>
        <div>
          <p className="texto-grande">Fíjate:</p>
          <Pads items={[
            'Usa el vocabulario: modal, formulario, drag & drop, toast, grid, cards.',
            'Dice exactamente qué campos y qué pasa al guardar.',
            'Incluye la regla de negocio (precio por defecto).',
            'Pide una sola sección, no toda la app.',
          ]} />
        </div>
      </div>
    </Lamina>
  )
}

const REGLAS = [
  ['Pide por partes', 'Una página o un componente a la vez.'],
  ['Pide un plan primero', '"Antes de escribir código, explícame qué vas a hacer."'],
  ['Pregunta por qué', 'Si no entiendes algo, pide que lo explique.'],
  ['Prueba siempre', 'En el navegador y en tu celular.'],
  ['Cambios concretos', '"En la card, el precio a la derecha y en rojo", no "mejóralo".'],
  ['Guarda versiones', 'Antes de un cambio grande, haz una copia (git).'],
  ['Cuida tus secretos', 'Nunca pegues contraseñas ni claves en el chat.'],
]

function ConControl({ paso }) {
  return (
    <Lamina titulo="Usar la IA sin perder el control">
      <ol className="reglas">
        {REGLAS.map(([t, d], i) => (
          <Paso key={t} como="li" desde={i < 3 ? 0 : 1} paso={paso}>
            <strong>{t}</strong>
            <span>{d}</span>
          </Paso>
        ))}
      </ol>
    </Lamina>
  )
}

function Aprender() {
  return (
    <Lamina titulo="Usa la IA para aprender, no solo para copiar" bajada="En tu defensa de grado te van a preguntar cómo funciona tu proyecto.">
      <div className="pedidos-aprender">
        <p>"Explícame este código línea por línea, como si tuviera 16 años."</p>
        <p>"¿Por qué sale este error? No lo arregles todavía, primero explícame."</p>
        <p>"Dame 3 ejercicios cortos para practicar formularios en HTML."</p>
        <p>"Hazme 5 preguntas para ver si entendí qué es una API."</p>
        <p>"¿Qué otras formas había de hacer esto? ¿Cuál es mejor y por qué?"</p>
      </div>
    </Lamina>
  )
}

function Skills() {
  return (
    <Lamina titulo="Skills: las recetas del agente">
      <div className="col2 centrado-v">
        <div>
          <p className="texto-grande">Una <strong>skill</strong> es un archivo de instrucciones (SKILL.md) que el agente lee <strong>antes</strong> de hacer una tarea: pasos, reglas, ejemplos y errores que debe evitar.</p>
          <Pads items={[
            'frontend-design: cómo diseñar páginas con personalidad. Con esa skill se diseñó esta presentación.',
            'insforge: cómo crear tablas, login y subir imágenes en InsForge.',
            'Cualquiera puede escribir una: son instrucciones en texto normal.',
          ]} />
        </div>
        <div>
          <Icono nombre="receta" tam={96} />
          <Analogia>La misma cocinera, <strong>con receta</strong>, hace el plato bien siempre. Sin receta, a veces le sale y a veces no.</Analogia>
        </div>
      </div>
    </Lamina>
  )
}

function MCP() {
  return (
    <Lamina titulo="MCP: el enchufe universal de la IA" bajada="Model Context Protocol: una forma estándar de conectar la IA con herramientas.">
      <div className="mcp">
        <div className="mcp-ia"><Icono nombre="robot" tam={64} /><strong>Agente IA</strong></div>
        <div className="mcp-bus"><span>MCP</span></div>
        <div className="mcp-herramientas">
          <div><Icono nombre="bd" tam={36} />Base de datos (InsForge)</div>
          <div><Icono nombre="navegador" tam={36} />Navegador</div>
          <div><Icono nombre="nube" tam={36} />Google Drive</div>
          <div><Icono nombre="servidor" tam={36} />GitHub</div>
        </div>
      </div>
      <div className="col2">
        <Analogia icono="enchufe">Como el <strong>USB</strong>: no importa la marca del mouse, todos usan el mismo puerto.</Analogia>
        <p className="diferencia"><strong>Skill</strong> = saber cómo hacerlo (la receta). <strong>MCP</strong> = poder hacerlo (las manos y las herramientas).</p>
      </div>
    </Lamina>
  )
}

export default {
  id: 'ia',
  titulo: 'La IA como herramienta',
  corto: '3. La IA como herramienta',
  hub: {
    Comp: crearHub({ numero: 3, titulo: 'La IA como herramienta', bajada: 'No basta pedir: hay que saber qué pedir y cómo pedirlo.' }),
  },
  hijos: [
    { id: 'cambio', titulo: 'Cómo cambió', Comp: Cambio, pasos: 1 },
    { id: 'chat-agente', titulo: 'Chat o agente', Comp: ChatAgente },
    { id: 'opencode', titulo: 'OpenCode', Comp: OpenCode },
    { id: 'malo-bueno', titulo: 'Pedido vago vs preciso', Comp: MaloBueno, pasos: 2, notas: 'Lee el pedido preciso en voz alta y pregunta qué palabras en negrita no conocían. Las vemos a continuación.' },
    { id: 'formula', titulo: 'La receta', Comp: Formula, pasos: 4 },
    { id: 'vocab-estructura', titulo: 'Vocabulario: estructura', Comp: () => <Vocabulario titulo="Vocabulario: partes de una página" bajada="Si sabes el nombre, la IA sabe qué dibujar." items={V_ESTRUCTURA} />, notas: 'Pide que identifiquen estas partes en una app que usen todos los días (TikTok, WhatsApp Web, la página del colegio).' },
    { id: 'vocab-componentes', titulo: 'Vocabulario: componentes', Comp: () => <Vocabulario titulo="Vocabulario: componentes" bajada="Las piezas que se repiten en casi todas las apps." items={V_COMPONENTES} /> },
    { id: 'vocab-flujos', titulo: 'Vocabulario: páginas y flujos', Comp: () => <Vocabulario titulo="Vocabulario: páginas y estados" bajada="Lo que pasa cuando la app trabaja con usuarios y datos." items={V_FLUJOS} /> },
    { id: 'estilo', titulo: 'Vocabulario de estilo', Comp: Estilo },
    { id: 'ejemplo-real', titulo: 'Un pedido real', Comp: EjemploReal, notas: 'Este es casi el pedido con el que se construyó la sección Platos de la app de demostración.' },
    { id: 'control', titulo: 'Sin perder el control', Comp: ConControl, pasos: 1 },
    { id: 'aprender', titulo: 'Aprender con IA', Comp: Aprender },
    { id: 'skills', titulo: 'Skills', Comp: Skills },
    { id: 'mcp', titulo: 'MCP', Comp: MCP },
  ],
}
