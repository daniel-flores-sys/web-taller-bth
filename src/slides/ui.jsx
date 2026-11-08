// Piezas reutilizables para armar las láminas

export function Lamina({ titulo, bajada, children, className = '' }) {
  return (
    <div className={`contenido ${className}`}>
      {titulo && <h2 className="lamina-titulo">{titulo}</h2>}
      {bajada && <p className="lamina-bajada">{bajada}</p>}
      <div className="lamina-cuerpo">{children}</div>
    </div>
  )
}

// "Es como...": la analogía que aterriza el concepto
export function Analogia({ children, icono = 'foco' }) {
  return (
    <div className="analogia">
      <Icono nombre={icono} />
      <p>{children}</p>
    </div>
  )
}

// Término técnico (casi siempre en inglés) + su traducción
export function Glosa({ termino, es, children }) {
  return (
    <div className="glosa">
      <span className="glosa-termino">{termino}</span>
      <span className="glosa-es">{es}</span>
      {children && <p className="glosa-nota">{children}</p>}
    </div>
  )
}

// Relación con la malla curricular del BTH
export function Malla({ children }) {
  return <p className="malla"><Icono nombre="libro" />En tu malla: {children}</p>
}

export function Codigo({ children, className = '' }) {
  return <pre className={`codigo ${className}`}><code>{children}</code></pre>
}

// Viñetas con forma de "pad" de soldadura
export function Pads({ items, className = '' }) {
  return (
    <ul className={`pads ${className}`}>
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  )
}

export function Icono({ nombre, tam = 44 }) {
  const p = { width: tam, height: tam, viewBox: '0 0 48 48', 'aria-hidden': true, className: 'icono' }
  const t = { fill: 'none', stroke: 'currentColor', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (nombre) {
    case 'foco':
      return <svg {...p}><path {...t} d="M18 34h12M19 40h10M24 6a12 12 0 0 0-7 21.8V32h14v-4.2A12 12 0 0 0 24 6z" /></svg>
    case 'libro':
      return <svg {...p}><path {...t} d="M8 10h12a4 4 0 0 1 4 4v26a3 3 0 0 0-3-3H8zM40 10H28a4 4 0 0 0-4 4v26a3 3 0 0 1 3-3h13z" /></svg>
    case 'persona':
      return <svg {...p}><circle {...t} cx="24" cy="16" r="8" /><path {...t} d="M8 42c2-9 8-13 16-13s14 4 16 13" /></svg>
    case 'navegador':
      return <svg {...p}><rect {...t} x="5" y="9" width="38" height="30" rx="4" /><path {...t} d="M5 17h38" /><circle cx="11" cy="13" r="1.6" fill="currentColor" /><circle cx="16" cy="13" r="1.6" fill="currentColor" /></svg>
    case 'servidor':
      return <svg {...p}><rect {...t} x="8" y="6" width="32" height="12" rx="3" /><rect {...t} x="8" y="22" width="32" height="12" rx="3" /><path {...t} d="M14 12h4M14 28h4M24 34v8M16 42h16" /></svg>
    case 'bd':
      return <svg {...p}><ellipse {...t} cx="24" cy="11" rx="15" ry="5" /><path {...t} d="M9 11v26c0 2.8 6.7 5 15 5s15-2.2 15-5V11M9 24c0 2.8 6.7 5 15 5s15-2.2 15-5" /></svg>
    case 'nube':
      return <svg {...p}><path {...t} d="M14 36h21a8 8 0 0 0 1-16 11 11 0 0 0-21-2 9 9 0 0 0-1 18z" /></svg>
    case 'globo':
      return <svg {...p}><circle {...t} cx="24" cy="24" r="17" /><path {...t} d="M7 24h34M24 7c-6 6-6 28 0 34M24 7c6 6 6 28 0 34" /></svg>
    case 'agenda':
      return <svg {...p}><rect {...t} x="10" y="5" width="28" height="38" rx="3" /><path {...t} d="M10 13H6M10 24H6M10 35H6M18 16h12M18 23h8" /></svg>
    case 'robot':
      return <svg {...p}><rect {...t} x="9" y="15" width="30" height="24" rx="6" /><path {...t} d="M24 15V8M19 26h.01M29 26h.01M18 33h12" /><circle cx="24" cy="7" r="2.5" fill="currentColor" /></svg>
    case 'enchufe':
      return <svg {...p}><path {...t} d="M18 6v10M30 6v10M12 16h24v8a12 12 0 0 1-24 0zM24 36v6" /></svg>
    case 'receta':
      return <svg {...p}><path {...t} d="M12 6h18l8 8v28H12zM30 6v8h8M18 22h14M18 29h14M18 36h8" /></svg>
    case 'candado':
      return <svg {...p}><rect {...t} x="10" y="21" width="28" height="20" rx="4" /><path {...t} d="M16 21v-6a8 8 0 0 1 16 0v6M24 29v5" /></svg>
    case 'cohete':
      return <svg {...p}><path {...t} d="M24 5c8 5 11 13 9 24l-5 6h-8l-5-6c-2-11 1-19 9-24zM19 35l-4 8M29 35l4 8" /><circle {...t} cx="24" cy="19" r="4" /></svg>
    default:
      return null
  }
}

// Bocetos (wireframes) mínimos para el vocabulario visual
export function Boceto({ tipo }) {
  const c = { className: 'boceto', viewBox: '0 0 200 130', 'aria-hidden': true }
  const caja = (x, y, w, h, extra = '') => <rect x={x} y={y} width={w} height={h} rx="4" className={`b ${extra}`} />
  switch (tipo) {
    case 'landing':
      return <svg {...c}>{caja(8, 8, 184, 14)}{caja(8, 28, 110, 12, 'fuerte')}{caja(8, 46, 80, 6)}{caja(8, 58, 40, 12, 'acento')}{caja(128, 28, 64, 44)}{caja(8, 82, 56, 40)}{caja(72, 82, 56, 40)}{caja(136, 82, 56, 40)}</svg>
    case 'navbar':
      return <svg {...c}>{caja(8, 10, 184, 22, 'fuerte')}<circle cx="22" cy="21" r="6" className="b acento" />{caja(96, 18, 20, 6)}{caja(124, 18, 20, 6)}{caja(152, 15, 32, 12, 'acento')}{caja(8, 44, 184, 78)}</svg>
    case 'hero':
      return <svg {...c}>{caja(8, 8, 184, 114, 'suave')}{caja(24, 30, 120, 16, 'fuerte')}{caja(24, 54, 90, 7)}{caja(24, 66, 70, 7)}{caja(24, 84, 46, 16, 'acento')}</svg>
    case 'footer':
      return <svg {...c}>{caja(8, 8, 184, 70)}{caja(8, 86, 184, 36, 'fuerte')}{caja(18, 96, 40, 5, 'claro')}{caja(18, 106, 30, 5, 'claro')}{caja(80, 96, 40, 5, 'claro')}{caja(140, 96, 40, 5, 'claro')}</svg>
    case 'sidebar':
      return <svg {...c}>{caja(8, 8, 50, 114, 'fuerte')}{caja(16, 20, 34, 6, 'claro')}{caja(16, 34, 34, 6, 'claro')}{caja(16, 48, 34, 6, 'claro')}{caja(66, 8, 126, 114)}</svg>
    case 'dashboard':
      return <svg {...c}>{caja(8, 8, 40, 114, 'fuerte')}{caja(56, 8, 42, 28, 'acento')}{caja(104, 8, 42, 28)}{caja(152, 8, 40, 28)}<polyline points="60,100 80,80 100,90 125,60 150,70 185,45" className="b-linea" />{caja(56, 44, 136, 78, 'vacio')}</svg>
    case 'grid':
      return <svg {...c}>{[0, 1, 2].map((i) => [0, 1].map((j) => <g key={`${i}${j}`}>{caja(8 + i * 63, 8 + j * 60, 58, 54)}</g>))}</svg>
    case 'card':
      return <svg {...c}>{caja(50, 6, 100, 118)}{caja(50, 6, 100, 54, 'suave')}{caja(60, 68, 64, 9, 'fuerte')}{caja(60, 83, 80, 5)}{caja(60, 104, 30, 10, 'acento')}</svg>
    case 'modal':
      return <svg {...c}><rect x="0" y="0" width="200" height="130" className="b oscuro" />{caja(40, 22, 120, 86, 'blanco')}{caja(52, 34, 60, 9, 'fuerte')}{caja(52, 52, 96, 5)}{caja(52, 62, 80, 5)}{caja(108, 86, 40, 12, 'acento')}{caja(62, 86, 40, 12)}</svg>
    case 'toast':
      return <svg {...c}>{caja(8, 8, 184, 114)}{caja(50, 96, 100, 20, 'fuerte')}{caja(60, 104, 60, 5, 'claro')}</svg>
    case 'dropdown':
      return <svg {...c}>{caja(40, 10, 120, 20, 'fuerte')}<path d="M144 17l5 5 5-5" className="b-linea" />{caja(40, 34, 120, 84)}{caja(48, 44, 80, 7)}{caja(48, 62, 90, 7, 'acento')}{caja(48, 80, 70, 7)}{caja(48, 98, 84, 7)}</svg>
    case 'tabs':
      return <svg {...c}>{caja(8, 10, 56, 20, 'acento')}{caja(68, 10, 56, 20)}{caja(128, 10, 56, 20)}{caja(8, 34, 184, 88)}{caja(20, 48, 120, 7)}{caja(20, 62, 100, 7)}</svg>
    case 'carousel':
      return <svg {...c}>{caja(30, 14, 140, 86, 'suave')}<path d="M18 57l-8 0M20 50l-8 7 8 7" className="b-linea" /><path d="M182 50l8 7-8 7" className="b-linea" /><circle cx="88" cy="114" r="4" className="b acento" /><circle cx="100" cy="114" r="4" className="b" /><circle cx="112" cy="114" r="4" className="b" /></svg>
    case 'badge':
      return <svg {...c}>{caja(30, 20, 140, 90)}{caja(42, 34, 70, 9, 'fuerte')}<rect x="118" y="30" width="42" height="16" rx="8" className="b acento" />{caja(42, 54, 100, 6)}</svg>
    case 'form':
      return <svg {...c}>{caja(40, 8, 120, 114)}{caja(52, 18, 40, 6, 'fuerte')}{caja(52, 30, 96, 14)}{caja(52, 52, 40, 6, 'fuerte')}{caja(52, 64, 96, 14)}{caja(52, 92, 96, 18, 'acento')}</svg>
    case 'login':
      return <svg {...c}>{caja(50, 8, 100, 114)}<circle cx="100" cy="28" r="10" className="b fuerte" />{caja(62, 46, 76, 12)}{caja(62, 64, 76, 12)}{caja(62, 86, 76, 16, 'acento')}{caja(76, 108, 48, 5)}</svg>
    case 'table':
      return <svg {...c}>{caja(8, 10, 184, 18, 'fuerte')}{[0, 1, 2, 3].map((i) => <g key={i}>{caja(8, 32 + i * 23, 184, 19)}</g>)}</svg>
    case 'skeleton':
      return <svg {...c}>{caja(8, 10, 60, 50, 'suave')}{caja(76, 14, 110, 10, 'suave')}{caja(76, 32, 80, 8, 'suave')}{caja(8, 72, 184, 10, 'suave')}{caja(8, 90, 150, 10, 'suave')}</svg>
    case 'drag':
      return <svg {...c}><rect x="30" y="14" width="140" height="100" rx="10" className="b punteado" /><path d="M100 46v30M88 58l12-12 12 12" className="b-linea" />{caja(72, 86, 56, 6)}</svg>
    case 'accordion':
      return <svg {...c}>{caja(20, 8, 160, 20, 'fuerte')}{caja(20, 32, 160, 46)}{caja(30, 42, 120, 6)}{caja(30, 56, 100, 6)}{caja(20, 82, 160, 18)}{caja(20, 104, 160, 18)}</svg>
    default:
      return <svg {...c}>{caja(8, 8, 184, 114)}</svg>
  }
}
