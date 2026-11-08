// Portada de cada sección: es el "chip" grande. Su contenido vive en la franja
// de arriba; el resto del chip lo ocupan las láminas de la sección (en miniatura).
export function crearHub({ numero, titulo, bajada, malla }) {
  return function Hub() {
    return (
      <div className="hub-contenido">
        <div className="hub-pad" aria-hidden="true">{numero}</div>
        <div className="hub-textos">
          <h2>{titulo}</h2>
          <p>{bajada}</p>
          {malla && <p className="hub-malla">En tu malla: {malla}</p>}
        </div>
      </div>
    )
  }
}
