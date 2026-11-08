// Muestra su contenido solo cuando la lámina llega al paso indicado.
// Ocupa su espacio desde el inicio, así nada "salta" al aparecer.
export default function Paso({ desde, paso, como: Etiqueta = 'div', className = '', children, ...resto }) {
  const visible = paso >= desde
  return (
    <Etiqueta className={`paso ${visible ? 'paso-visible' : ''} ${className}`} aria-hidden={!visible} {...resto}>
      {children}
    </Etiqueta>
  )
}
