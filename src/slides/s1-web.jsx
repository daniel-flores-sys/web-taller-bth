import Paso from '../deck/Paso'
import Circuito, { PASOS_CIRCUITO } from './Circuito'
import { crearHub } from './hub'
import { Analogia, Codigo, Glosa, Icono, Lamina, Malla, Pads } from './ui'

// ---------- Historia ----------
const HITOS = [
  ['1969', 'ARPANET', 'Primeras computadoras conectadas entre universidades de EE.UU. Nace la idea de internet.'],
  ['1991', 'La Web', 'Tim Berners-Lee, en el CERN (Suiza), publica la primera página web: solo texto y enlaces.'],
  ['1998', 'Buscadores', 'Google ordena millones de páginas. Encontrar información se vuelve fácil.'],
  ['2004', 'Web 2.0', 'Facebook (2004) y YouTube (2005): ya no solo lees, también publicas.'],
  ['2007', 'Web en el bolsillo', 'El primer iPhone. Desde entonces, la mayoría navega desde el celular.'],
  ['2013', 'React', 'Facebook libera React: las páginas se arman con piezas reutilizables.'],
  ['2022', 'IA para todos', 'ChatGPT, luego Gemini y otros: la IA empieza a escribir código.'],
]

function Historia({ paso }) {
  return (
    <Lamina titulo="Un poco de historia" bajada="La web tiene apenas 35 años. Tus papás la vieron nacer.">
      <ol className="linea-tiempo">
        {HITOS.map(([anio, t, d], i) => (
          <Paso key={anio} como="li" desde={i < 2 ? 0 : i - 1} paso={paso}>
            <span className="lt-anio">{anio}</span>
            <strong>{t}</strong>
            <p>{d}</p>
          </Paso>
        ))}
      </ol>
    </Lamina>
  )
}

function InternetWeb() {
  return (
    <Lamina titulo="Internet y la Web no son lo mismo">
      <div className="col2">
        <div className="bloque-concepto">
          <Icono nombre="globo" tam={64} />
          <h3>Internet</h3>
          <p>La red física: cables, fibra óptica, antenas y routers que conectan computadoras de todo el mundo.</p>
          <Analogia icono="foco">Son las <strong>carreteras</strong>.</Analogia>
        </div>
        <div className="bloque-concepto">
          <Icono nombre="navegador" tam={64} />
          <h3>La Web</h3>
          <p>Uno de los servicios que usan esas carreteras: páginas que se abren con un navegador y se unen con enlaces.</p>
          <Analogia icono="foco">Son los <strong>minibuses</strong> que llevan páginas por esas carreteras.</Analogia>
        </div>
      </div>
      <p className="nota-pie">WhatsApp, los juegos en línea o el correo también usan internet, pero no son "la web".</p>
    </Lamina>
  )
}

function AntesAhora({ paso }) {
  return (
    <Lamina titulo="Antes y ahora">
      <div className="col2 comparacion">
        <div className="lado lado-antes">
          <h3>Web 1.0: el afiche</h3>
          <Pads items={[
            'Páginas fijas: todos ven exactamente lo mismo.',
            'Solo podías leer.',
            'Para cambiar algo, alguien editaba el archivo a mano.',
            'Módem de 56 kbps: una foto tardaba un minuto en cargar.',
          ]} />
        </div>
        <Paso desde={1} paso={paso} className="lado lado-ahora">
          <h3>Hoy: la aplicación web</h3>
          <Pads items={[
            'Cada persona ve algo distinto: tu perfil, tus reservas.',
            'Puedes escribir, subir fotos, comprar, reservar.',
            'Los datos viven en una base de datos y cambian solos.',
            'Funciona igual en el celular y en la computadora.',
          ]} />
        </Paso>
      </div>
      <Paso desde={1} paso={paso}>
        <Analogia>Antes la web era un <strong>periódico pegado en la pared</strong>. Hoy es un <strong>mesero que te atiende a ti</strong>.</Analogia>
      </Paso>
    </Lamina>
  )
}

// ---------- Personajes ----------
const PERSONAJES = [
  ['persona', 'Cliente', 'Tú, con tu navegador.', 'El comensal que pide'],
  ['globo', 'Internet', 'Lleva y trae los mensajes.', 'El mesero'],
  ['servidor', 'Servidor', 'Computadora prendida 24/7 que recibe pedidos y prepara respuestas.', 'La cocina'],
  ['bd', 'Base de datos', 'Donde se guarda todo de forma ordenada: usuarios, platos, reservas.', 'La despensa y el cuaderno de pedidos'],
]

function Personajes({ paso }) {
  return (
    <Lamina titulo="Los 4 personajes de toda app web" bajada="Piensa en la Pensión Doña Rosa a la hora del almuerzo.">
      <div className="personajes">
        {PERSONAJES.map(([ic, t, d, an], i) => (
          <Paso key={t} desde={i} paso={paso} className="personaje">
            <Icono nombre={ic} tam={72} />
            <h3>{t}</h3>
            <p>{d}</p>
            <p className="personaje-analogia">{an}</p>
          </Paso>
        ))}
      </div>
    </Lamina>
  )
}

function Navegador() {
  return (
    <Lamina titulo="¿Qué es un navegador?" bajada="Chrome, Edge, Firefox, Safari… todos hacen lo mismo: traducir texto en páginas.">
      <div className="col2 centrado-v">
        <div className="capas">
          <div className="capa capa-html"><strong>HTML</strong><span>El esqueleto: qué hay (títulos, botones, imágenes).</span></div>
          <div className="capa capa-css"><strong>CSS</strong><span>La ropa y la pintura: cómo se ve (colores, tamaños).</span></div>
          <div className="capa capa-js"><strong>JavaScript</strong><span>Los músculos: qué hace (clics, cálculos, pedir datos).</span></div>
        </div>
        <div className="traduccion">
          <Codigo>{`<button class="reservar">
  Reservar
</button>`}</Codigo>
          <span className="flecha-abajo" aria-hidden="true" />
          <div className="boton-muestra">Reservar</div>
        </div>
      </div>
      <Malla>5to, Diseño y programación web I (HTML, CSS, JavaScript).</Malla>
    </Lamina>
  )
}

function IP() {
  return (
    <Lamina titulo="IP: el número de cada dispositivo">
      <div className="col2 centrado-v">
        <div>
          <p className="numero-gigante">104.21.33.7</p>
          <p className="texto-grande">Cuatro números del 0 al 255 (IPv4). Cada dispositivo conectado tiene uno: tu celular, el servidor, el router de tu casa.</p>
          <Glosa termino="IP" es="Internet Protocol, protocolo de internet" />
        </div>
        <div>
          <Analogia>Es como el <strong>número de celular</strong> de cada computadora. Sin el número no puedes llamar.</Analogia>
          <p className="nota-pie">Tu celular recibe una IP del router automáticamente: eso lo hace el DHCP.</p>
        </div>
      </div>
      <Malla>6to, Direccionamiento IP y subredes, IPv4 e IPv6, DHCP.</Malla>
    </Lamina>
  )
}

function Dominio() {
  return (
    <Lamina titulo="Dominio: el nombre fácil de recordar" bajada="Nadie se aprende números. Por eso existen los nombres.">
      <div className="dominio">
        <span className="dom-parte dom-nombre">minedu<small>el nombre</small></span>
        <span className="dom-punto">.</span>
        <span className="dom-parte dom-tipo">gob<small>tipo: gobierno</small></span>
        <span className="dom-punto">.</span>
        <span className="dom-parte dom-pais">bo<small>país: Bolivia</small></span>
      </div>
      <div className="col2">
        <Analogia>Es como el <strong>nombre del contacto</strong> en tu celular: guardas "Mamá", no su número.</Analogia>
        <Pads items={[
          'Los dominios .bo los administra NIC Bolivia.',
          'Se alquilan por año. Otros: .com, .org, .edu.bo, .com.bo',
          'Nuestra pensión de ejemplo sería pension.bo',
        ]} />
      </div>
    </Lamina>
  )
}

function DNS({ paso }) {
  return (
    <Lamina titulo="DNS: la agenda de contactos de internet">
      <div className="dns-flujo">
        <Paso desde={0} paso={paso} className="dns-burbuja dns-pregunta">¿Cuál es el número de <strong>pension.bo</strong>?</Paso>
        <Paso desde={1} paso={paso} className="dns-burbuja dns-respuesta">Es <strong>104.21.33.7</strong></Paso>
        <Paso desde={2} paso={paso} className="dns-burbuja dns-final">¡Gracias! Ahora sí me conecto a esa IP.</Paso>
      </div>
      <div className="col2">
        <Analogia icono="agenda">Tú buscas "Mamá" en la agenda y el celular marca el número. El DNS hace eso con los dominios.</Analogia>
        <Pads items={[
          'DNS: Domain Name System, sistema de nombres de dominio.',
          'Si el DNS falla, "no hay internet" aunque el WiFi funcione.',
        ]} />
      </div>
      <Malla>6to, Servicios TCP/IP: DNS y DHCP.</Malla>
    </Lamina>
  )
}

function Nube() {
  return (
    <Lamina titulo="La nube no está en el cielo">
      <div className="col2 centrado-v">
        <div>
          <p className="texto-grande">"La nube" son <strong>edificios enormes llenos de computadoras</strong> (centros de datos), prendidas día y noche, con aire acondicionado, energía de respaldo y vigilancia.</p>
          <Pads items={[
            'Son de empresas como Amazon, Google o Microsoft.',
            'Tú alquilas un pedacito: pagas por lo que usas (y a veces es gratis).',
            'La app de nuestra pensión vive en un servidor en Virginia, EE.UU.',
          ]} />
        </div>
        <div>
          <div className="centro-datos" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => <span key={i} />)}
          </div>
          <Analogia icono="nube">En vez de comprar un horno industrial, <strong>alquilas una cocina</strong> ya equipada por horas.</Analogia>
        </div>
      </div>
    </Lamina>
  )
}

function Peticion({ paso }) {
  return (
    <Lamina titulo="¿Qué viaja exactamente?" bajada="Dos sobres: uno va (petición) y otro vuelve (respuesta). Son solo texto.">
      <div className="col2">
        <div className="sobre sobre-ida">
          <h3>Request: la petición</h3>
          <Codigo>{`POST /reservas
Host: pension.bo
Cookie: sesion=a8f3…        ← quién eres
Content-Type: application/json

{ "platos": ["sopa", "milanesa"] }`}</Codigo>
          <Pads items={['Verbo y dirección: qué quieres y de qué.', 'Cabeceras: datos extra (idioma, navegador).', 'Cookie o token: tu "manilla" de sesión.', 'Cuerpo: solo si mandas datos (un formulario).']} />
        </div>
        <Paso desde={1} paso={paso} className="sobre sobre-vuelta">
          <h3>Response: la respuesta</h3>
          <Codigo>{`HTTP/1.1 201 Created
Content-Type: application/json

{ "reserva": 15,
  "total": 30,
  "recoger_antes": "14:30" }`}</Codigo>
          <Pads items={['Código de estado: cómo salió (201 = creado).', 'Tipo de contenido: HTML, JSON, imagen…', 'Cuerpo: la página o los datos.']} />
        </Paso>
      </div>
    </Lamina>
  )
}

function DondeVive({ paso }) {
  return (
    <Lamina titulo="¿Dónde vive cada cosa?" bajada="Mientras miras una página, hay cosas en tu celular y cosas en el servidor.">
      <div className="col2">
        <div className="lugar">
          <h3><Icono nombre="navegador" tam={40} /> En el cliente (tu celular)</h3>
          <dl className="definiciones">
            <dt>La página abierta</dt><dd>En la memoria RAM de la pestaña. Al cerrarla, desaparece.</dd>
            <dt>Caché</dt><dd>Copias de imágenes y archivos para cargar más rápido la próxima vez.</dd>
            <dt>Cookies</dt><dd>Pequeños datos, como tu sesión. Se envían solas en cada petición.</dd>
            <dt>localStorage</dt><dd>Un cuadernito del navegador: preferencias, modo oscuro.</dd>
          </dl>
        </div>
        <Paso desde={1} paso={paso} className="lugar lugar-servidor">
          <h3><Icono nombre="servidor" tam={40} /> En el servidor (la nube)</h3>
          <dl className="definiciones">
            <dt>El código</dt><dd>El programa que decide qué responder.</dd>
            <dt>Archivos</dt><dd>Fotos de los platos, documentos (storage).</dd>
            <dt>Base de datos</dt><dd>Usuarios, platos, reservas: lo que todos comparten.</dd>
            <dt>Registros (logs)</dt><dd>Un diario de todo lo que pasó, para encontrar errores.</dd>
          </dl>
        </Paso>
      </div>
      <Paso desde={2} paso={paso}>
        <Analogia icono="candado">Regla de oro: <strong>lo importante y compartido va al servidor</strong>. Lo que está solo en tu celular, nadie más lo ve.</Analogia>
      </Paso>
    </Lamina>
  )
}

function CuandoRecibe() {
  return (
    <Lamina titulo="¿Cuándo se entera el servidor de algo?" bajada="Solo cuando el navegador le manda una petición. Nunca antes.">
      <div className="col2 centrado-v">
        <ul className="eventos">
          <li><span className="ev-si">Sí</span>Abres o recargas una página</li>
          <li><span className="ev-si">Sí</span>Envías un formulario de registro</li>
          <li><span className="ev-si">Sí</span>Inicias sesión</li>
          <li><span className="ev-si">Sí</span>Tocas "Confirmar reserva"</li>
          <li><span className="ev-si">Sí</span>Subes la foto de un plato</li>
          <li><span className="ev-no">No</span>Haces scroll o lees</li>
          <li><span className="ev-no">No</span>Escribes en un campo sin enviarlo</li>
        </ul>
        <div>
          <Analogia>El mesero solo va a la cocina <strong>cuando lo llamas</strong>. Si solo miras el menú, la cocina no sabe que existes.</Analogia>
          <p className="nota-pie">Las apps modernas piden datos "por detrás" sin recargar la página (fetch o AJAX). Así se actualiza el "Quedan 3" sin parpadear.</p>
          <Malla>6to, Uso de AJAX en aplicaciones web.</Malla>
        </div>
      </div>
    </Lamina>
  )
}

function Pregunta({ paso }) {
  return (
    <Lamina titulo="Pregunta rápida">
      <p className="pregunta">Reservaste tu almuerzo desde el celular. Luego <strong>borras el historial y las cookies</strong>. ¿Se borró tu reserva?</p>
      <Paso desde={1} paso={paso} className="respuesta">
        <strong>No.</strong> La reserva está en la base de datos del servidor. Lo que se borró es tu "manilla" de sesión (la cookie): solo tienes que volver a iniciar sesión para verla.
      </Paso>
    </Lamina>
  )
}

export default {
  id: 'web',
  titulo: 'La web por dentro',
  corto: '1. La web por dentro',
  hub: {
    Comp: crearHub({ numero: 1, titulo: 'La web por dentro', bajada: 'Qué viaja, qué se guarda y dónde.', malla: 'Fundamentos de internet, servicios TCP/IP, modelo cliente-servidor.' }),
    notas: 'Vista del capítulo: todas estas láminas son las que vamos a ver. Zoom al primer tema.',
  },
  hijos: [
    { id: 'historia', titulo: 'Historia', Comp: Historia, pasos: 5, notas: 'Pregunta: ¿cuántos años tenían sus papás en 2007, cuando salió el iPhone?' },
    { id: 'internet-web', titulo: 'Internet vs Web', Comp: InternetWeb },
    { id: 'antes-ahora', titulo: 'Antes y ahora', Comp: AntesAhora, pasos: 1 },
    { id: 'personajes', titulo: 'Los 4 personajes', Comp: Personajes, pasos: 3, notas: 'Esta analogía del restaurante la vamos a usar TODO el taller.' },
    { id: 'navegador', titulo: 'El navegador', Comp: Navegador },
    { id: 'ip', titulo: 'IP', Comp: IP },
    { id: 'dominio', titulo: 'Dominio', Comp: Dominio },
    { id: 'dns', titulo: 'DNS', Comp: DNS, pasos: 2 },
    { id: 'nube', titulo: 'La nube', Comp: Nube },
    {
      id: 'circuito', titulo: 'El circuito completo', Comp: Circuito, pasos: PASOS_CIRCUITO.length - 1,
      notas: 'La lámina más importante. Avanza paso a paso y pide que alguien explique con sus palabras cada paso antes de mostrarlo.',
    },
    { id: 'peticion', titulo: 'Qué viaja', Comp: Peticion, pasos: 1 },
    { id: 'donde-vive', titulo: 'Dónde vive cada cosa', Comp: DondeVive, pasos: 2 },
    { id: 'cuando', titulo: 'Cuándo se entera el servidor', Comp: CuandoRecibe },
    { id: 'pregunta-1', titulo: 'Pregunta rápida', Comp: Pregunta, pasos: 1, notas: 'Deja que respondan antes de revelar.' },
  ],
}
