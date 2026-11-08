import Deck from './deck/Deck'
import { LAMINAS, SECCIONES } from './slides'

export default function App() {
  return <Deck laminas={LAMINAS} secciones={SECCIONES} />
}
