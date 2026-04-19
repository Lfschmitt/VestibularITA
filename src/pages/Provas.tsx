import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { edicoes, type Edicao } from '../data/provas'
import '../../assets/css/provas.css'

interface AcervoItemProps {
  edicao: Edicao
  aberto: boolean
  onToggle: () => void
}

function AcervoItem({ edicao, aberto, onToggle }: AcervoItemProps) {
  return (
    <div className={`acervo-item${aberto ? ' acervo-item--aberto' : ''}`}>
      <button className="acervo-item__header" aria-expanded={aberto} onClick={onToggle}>
        <span className="acervo-item__ano">{edicao.ano}</span>
        <span className="acervo-item__seta" aria-hidden="true" />
      </button>
      {aberto && (
        <div className="acervo-item__painel">
          <div className="acervo-item__grupo">
            <span className="acervo-item__fase-label">Primeira Fase</span>
            <div className="acervo-item__links">
              <a href={edicao.fase1.prova} className="acervo-link" target="_blank" rel="noreferrer">
                Prova
              </a>
              <a
                href={edicao.fase1.gabarito}
                className="acervo-link"
                target="_blank"
                rel="noreferrer"
              >
                Gabarito
              </a>
            </div>
          </div>
          <div className="acervo-item__divisor" />
          <div className="acervo-item__grupo">
            <span className="acervo-item__fase-label acervo-item__fase-label--2fase">
              Segunda Fase
            </span>
            <div className="acervo-item__links">
              {edicao.fase2.map(mat => (
                <a
                  key={mat.nome}
                  href={mat.arquivo}
                  className="acervo-link acervo-link--2fase"
                  target="_blank"
                  rel="noreferrer"
                >
                  {mat.nome}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Provas() {
  const [anoAberto, setAnoAberto] = useState<number | null>(null)

  useEffect(() => {
    const elementos = Array.from(
      document.querySelectorAll<HTMLElement>('.pagina-hero__conteudo, .acervo-item'),
    )

    elementos.forEach(el => el.classList.add('animar'))

    const visiveis: HTMLElement[] = []
    const naoVisiveis: HTMLElement[] = []

    elementos.forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) visiveis.push(el)
      else naoVisiveis.push(el)
    })

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        visiveis.forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.06}s`
          el.classList.add('animar--visivel')
        })
      })
    })

    const observador = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animar--visivel')
            observador.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    naoVisiveis.forEach(el => observador.observe(el))

    return () => observador.disconnect()
  }, [])

  const toggle = (ano: number) => {
    setAnoAberto(prev => (prev === ano ? null : ano))
  }

  return (
    <>
      <Navbar />

      <section className="pagina-hero">
        <div className="pagina-hero__conteudo">
          <p className="hero__tag">Acervo completo</p>
          <h1 className="pagina-hero__titulo">Provas Anteriores</h1>
          <p className="pagina-hero__sub">
            Acesse provas e gabaritos de edições passadas do vestibular do ITA.
          </p>
        </div>
      </section>

      <main className="acervo">
        <div className="acervo__inner">
          <div className="acervo-lista">
            {edicoes.map(edicao => (
              <AcervoItem
                key={edicao.ano}
                edicao={edicao}
                aberto={anoAberto === edicao.ano}
                onToggle={() => toggle(edicao.ano)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
