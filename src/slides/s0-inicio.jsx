import Paso from '../deck/Paso'
import { Analogia, Lamina } from './ui'

function Portada() {
  return (
    <div className="hub-contenido portada">
      <div className="hub-textos">
        <h1>Cómo funciona la web y cómo construirla con IA</h1>
        <p>Taller para Sistemas Informáticos, BTH. De 5to a 6to, 2027.</p>
      </div>
    </div>
  )
}

const PARADAS = [
  ['La web por dentro', 'Qué viaja, qué se guarda y dónde', '30 min'],
  ['Frontend, backend y HTTP', 'Las dos caras de una app', '20 min'],
  ['La IA como herramienta', 'Saber qué pedir y cómo pedirlo', '30 min'],
  ['React y el backend listo', 'Piezas reutilizables e InsForge', '15 min'],
  ['Taller', 'Publicamos una app real', '25 min'],
]

function Recorrido({ paso }) {
  return (
    <Lamina titulo="El recorrido de hoy" bajada="Cinco paradas, como un circuito: cada una alimenta a la siguiente.">
      <ol className="recorrido">
        {PARADAS.map(([t, d, min], i) => (
          <Paso key={t} como="li" desde={i === 0 ? 0 : 1} paso={paso}>
            <span className="recorrido-num">{i + 1}</span>
            <div>
              <strong>{t}</strong>
              <span>{d}</span>
            </div>
            <span className="recorrido-min">{min}</span>
          </Paso>
        ))}
      </ol>
    </Lamina>
  )
}

function Meta() {
  return (
    <Lamina titulo="Al terminar vas a poder…">
      <div className="col2 centrado-v">
        <ul className="metas">
          <li>Explicar qué pasa desde que escribes una dirección hasta que ves la página.</li>
          <li>Pedirle a la IA exactamente lo que quieres, con las palabras correctas.</li>
          <li>Entender cómo se publica una app con usuarios y base de datos.</li>
        </ul>
        <div className="tarjeta-demo">
          <p className="tarjeta-demo-sup">Nuestro ejemplo de todo el día</p>
          <p className="tarjeta-demo-titulo">Pensión Doña Rosa</p>
          <p>Una app para reservar el almuerzo: sopa de maní, picante de pollo, milanesa… y que no se acaben antes de que llegues.</p>
        </div>
      </div>
      <Analogia>
        Hoy no vamos a memorizar código. Vamos a entender las piezas para poder <strong>dirigir</strong> a la IA, como un maestro de obra dirige a sus albañiles.
      </Analogia>
    </Lamina>
  )
}

export default {
  id: 'inicio',
  titulo: 'Portada',
  corto: 'Inicio',
  hub: { Comp: Portada, notas: 'Presentación. Pregunta rápida: ¿quién ya hizo una página web? ¿Con qué? (muchos con Gemini en el celular). Hoy vamos a entender lo que pasa detrás.' },
  hijos: [
    { id: 'recorrido', titulo: 'El recorrido de hoy', Comp: Recorrido, pasos: 1, notas: 'Dos horas en total. El taller final depende de entender lo anterior.' },
    { id: 'meta', titulo: 'La meta', Comp: Meta, notas: 'La Pensión Doña Rosa será nuestro ejemplo en TODAS las secciones: cuando hablemos de servidor, de HTTP o de prompts, volveremos a ella.' },
  ],
}
