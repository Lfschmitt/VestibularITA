import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/ITA_logo.png'

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)
  const { pathname } = useLocation()

  const hashLink = (hash: string) => (pathname === '/' ? hash : `/${hash}`)

  const mobileMenuStyle: React.CSSProperties | undefined = menuAberto
    ? {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '64px',
        left: 0,
        width: '100%',
        background: '#0a0f1e',
        padding: '1rem 2rem',
        gap: '1rem',
      }
    : undefined

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="ITA Vestibular" className="navbar__logo-img" />
        </Link>
      </div>
      <nav className="navbar__links" style={mobileMenuStyle}>
        <a href={hashLink('#sobre')}>Sobre o ITA</a>
        <a href={hashLink('#processo')}>Processo Seletivo 2027</a>
        <div className="navbar__dropdown">
          <button className="navbar__dropdown-btn">
            Resultados <span className="navbar__dropdown-seta">▾</span>
          </button>
          <div className="navbar__dropdown-menu">
            <a href={hashLink('#resultados')}>Processo Seletivo 2027</a>
            <a href={hashLink('#estatisticas')}>Estatísticas Anteriores</a>
          </div>
        </div>
        <Link to="/provas" className={pathname === '/provas' ? 'nav-ativo' : ''}>
          Provas
        </Link>
        <a href={hashLink('#documentos')}>Documentos</a>
        <a href={hashLink('#contato')}>Contato</a>
      </nav>
      <button
        className="navbar__menu-toggle"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setMenuAberto(prev => !prev)}
      >
        {menuAberto ? '✕' : '☰'}
      </button>
    </header>
  )
}
