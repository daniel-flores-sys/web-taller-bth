import { PASOS_TALLER } from '../datos/taller'
import { crearHub } from './hub'
import { Codigo, Lamina, Pads } from './ui'

function QueHaremos() {
  return (
    <Lamina titulo="Lo que vamos a publicar" bajada="Pensión Doña Rosa: reservas de almuerzo con usuarios, fotos y stock.">
      <div className="col2">
        <div>
          <h3 className="subtitulo">El cliente</h3>
          <Pads items={[
            'Se registra con correo y confirma con un código.',
            'Ve el menú de hoy y cuántos platos quedan.',
            'Elige: con sopa o solo segundo, y cuántos de cada uno (1 sopa, 1 milanesa, 1 picante).',
            'Reserva para hoy hasta las 12:00 (o para mañana, si el dueño lo habilita).',
            'Paga y recoge en el local antes de la hora límite.',
          ]} />
        </div>
        <div>
          <h3 className="subtitulo">El dueño (un solo admin)</h3>
          <Pads items={[
            'Entra por otra ruta: /admin/ingresar.',
            'Registra platos con foto (arrastrar y soltar), descripción y precio en Bs.',
            'Arma el menú de cada día de la semana y cuántos platos prepara.',
            'Ve las reservas, el stock que queda y registra cada recojo.',
            'Configura precios por defecto y horarios.',
          ]} />
        </div>
      </div>
    </Lamina>
  )
}

function crearPaso(p, i) {
  return function PasoTaller() {
    return (
      <Lamina titulo={`${i + 1}. ${p.titulo}`} className="lamina-taller">
        <div className="taller">
          <div className="taller-texto">
            <p className="texto-grande">{p.texto}</p>
            {p.comando && <Codigo>{p.comando}</Codigo>}
          </div>
          <div className="captura">
            {p.imagen ? (
              <img src={`${import.meta.env.BASE_URL}capturas/${p.imagen}`} alt={p.titulo} />
            ) : (
              <div className="captura-pendiente">
                <strong>Captura pendiente</strong>
                <span>public/capturas/paso-{i + 1}.png</span>
              </div>
            )}
          </div>
        </div>
      </Lamina>
    )
  }
}

export default {
  id: 'taller',
  titulo: 'Taller: publicar la app',
  corto: '5. Taller',
  hub: {
    Comp: crearHub({ numero: 5, titulo: 'Taller: publicamos una app real', bajada: 'Del pedido al agente a una dirección que abres en tu celular.' }),
  },
  hijos: [
    { id: 'que-haremos', titulo: 'Lo que vamos a publicar', Comp: QueHaremos },
    ...PASOS_TALLER.map((p, i) => ({ id: `taller-${i + 1}`, titulo: p.titulo, Comp: crearPaso(p, i) })),
  ],
}
