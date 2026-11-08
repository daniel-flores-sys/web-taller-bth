import Paso from '../deck/Paso'
import { crearHub } from './hub'
import { Lamina } from './ui'

const IDEAS = [
  ['La web es un circuito', 'Navegador, DNS, internet, servidor y base de datos. Peticiones que van y respuestas que vuelven.'],
  ['Las reglas van en el backend', 'Lo que se ve se puede cambiar. Lo importante se valida en el servidor.'],
  ['HTTP es un idioma simple', 'GET, POST, PATCH, DELETE y un código que dice cómo salió.'],
  ['La IA hace lo que le pides', 'Si sabes qué pedir (landing, card, modal, dashboard…) y cómo pedirlo, tú tienes el control.'],
  ['No reinventes la cocina', 'React para el frontend; InsForge te da login, base de datos, archivos y hosting.'],
]

function Resumen({ paso }) {
  return (
    <Lamina titulo="Cinco ideas para llevarse">
      <ol className="ideas">
        {IDEAS.map(([t, d], i) => (
          <Paso key={t} como="li" desde={i < 2 ? 0 : i - 1} paso={paso}>
            <strong>{t}</strong>
            <span>{d}</span>
          </Paso>
        ))}
      </ol>
    </Lamina>
  )
}

function Reto() {
  return (
    <Lamina titulo="Reto para esta semana" bajada="Con la web que ya están haciendo con Gemini.">
      <ol className="reto">
        <li>Identifica en tu web: navbar, hero, cards, footer. ¿Qué te falta?</li>
        <li>Escribe <strong>3 pedidos precisos</strong> usando la receta: contexto, objetivo, contenido, aspecto, comportamiento y límites.</li>
        <li>Agrega un <strong>modal</strong> y un <strong>formulario con validación</strong>.</li>
        <li>Pídele a la IA que te explique cada parte nueva. Escribe en tu cuaderno qué hace.</li>
        <li>Pruébala en el celular de un compañero: ¿es responsive?</li>
      </ol>
    </Lamina>
  )
}

function Preguntas() {
  return (
    <div className="contenido final">
      <h2>¿Preguntas?</h2>
      <p>Gracias por su atención. Ahora les toca construir.</p>
    </div>
  )
}

export default {
  id: 'cierre',
  titulo: 'Cierre',
  corto: 'Cierre',
  hub: {
    Comp: crearHub({ numero: '✓', titulo: 'Cierre', bajada: 'Lo que aprendimos y lo que sigue.' }),
  },
  hijos: [
    { id: 'resumen', titulo: 'Cinco ideas', Comp: Resumen, pasos: 3 },
    { id: 'reto', titulo: 'Reto', Comp: Reto },
    { id: 'preguntas', titulo: 'Preguntas', Comp: Preguntas },
  ],
}
