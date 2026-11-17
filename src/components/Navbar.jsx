import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap, ArrowUpRight } from 'lucide-react'
export const navigation = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'O projeto' },
  { to: '/funcionalidades', label: 'Funcionalidades' },
  { to: '/tecnologias', label: 'Tecnologias' },
  { to: '/contato', label: 'Equipe & contato' },
]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="EduGuru, início">
          <span className="brand-icon">
            <GraduationCap size={26} />
          </span>
          Edu<span className="brand-purple">Guru</span>
          <span className="brand-divider" />
          <span className="brand-caption">O PROJETO</span>
        </Link>
        <button
          className="icon-button menu-toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={`main-nav ${open ? 'is-open' : ''}`}
          aria-label="Navegação principal"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setOpen(false)
              document.querySelector('.menu-toggle')?.focus()
            }
          }}
        >
          {navigation.map((item) => (
            <NavLink key={item.to} end={item.to === '/'} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/funcionalidades#demo" className="nav-cta">
          Explorar demo <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  )
}
