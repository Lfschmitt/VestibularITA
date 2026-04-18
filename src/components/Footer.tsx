import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__conteudo">
        <div>
          <span className="navbar__logo-sigla">ITA</span>
          <p>
            Instituto Tecnológico de Aeronáutica
            <br />
            São José dos Campos — SP
          </p>
        </div>
        <nav className="footer__links">
          <a href="/#sobre">Sobre</a>
          <a href="/#processo">Inscrições</a>
          <Link to="/provas">Provas</Link>
          <a href="/#faq">FAQ</a>
        </nav>
        <p className="footer__aviso">⚠️ Site não oficial — projeto educacional independente.</p>
      </div>
    </footer>
  )
}
