import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    const elementos = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.datas__card, .processo__card, .faq__item, .hero__content',
      ),
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

  return (
    <>
      <Navbar />

      {/* SOBRE O ITA */}
      <section className="hero-wrapper" id="sobre">
        <section className="hero">
          <div className="hero__content">
            <p className="hero__tag">Edição de 2027</p>
            <h1 className="hero__titulo">
              O caminho para
              <br />
              <span className="hero__destaque">voar mais alto</span>
              <br />
              começa aqui.
            </h1>
            <p className="hero__subtitulo">
              O Instituto Tecnológico de Aeronáutica oferece cursos de graduação com duração de 5
              anos. Os dois primeiros anos formam o "Curso Fundamental", com base sólida em física e
              matemática. A partir do terceiro ano, o aluno segue para a especialização escolhida:
            </p>
            <ul className="hero__lista">
              <li>Engenharia Aeronáutica</li>
              <li>Engenharia Eletrônica</li>
              <li>Engenharia Mecânica-Aeronáutica</li>
              <li>Engenharia Civil-Aeronáutica</li>
              <li>Engenharia de Computação</li>
              <li>Engenharia Aeroespacial</li>
              <li>Engenharia de Sistemas</li>
              <li>Engenharia de Energias</li>
            </ul>
          </div>
          <div className="hero__visual">
            <div className="hero__video-wrapper">
              <iframe
                className="hero__video"
                src="https://www.youtube.com/embed/4taGOvPA-74"
                title="Vídeo Institucional ITA"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="hero__campus">
              <h3 className="hero__campus-titulo">Campus do ITA</h3>
              <ul className="hero__campus-lista">
                <li>Campus São José dos Campos (SP)</li>
                <li>Campus Fortaleza (CE)</li>
              </ul>
            </div>
            <div className="hero__acoes">
              <a href="#processo" className="btn btn--primario">
                Ver inscrições
              </a>
              <Link to="/provas" className="btn btn--secundario">
                Provas anteriores
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* PROCESSO SELETIVO 2027 */}
      <section className="processo" id="processo">
        <div className="processo__container">

          {/* Provas */}
          <h2 className="secao__titulo processo__titulo">Provas</h2>
          <div className="processo__provas-grid">
            <div className="processo__card">
              <h3>1ª Fase</h3>
              <p>48 questões objetivas de Matemática, Física, Química e Inglês.</p>
            </div>
            <div className="processo__card">
              <h3>2ª Fase</h3>
              <p>Provas discursivas de Matemática, Química, Física e Português ao longo de 4 dias.</p>
            </div>
            <div className="processo__card processo__card--destaque">
              <Link to="/provas">Provas anteriores</Link>
            </div>
          </div>

          {/* Inscrições + Quadro de Avisos */}
          <div className="processo__bottom">

            {/* Esquerda: texto de inscrições + tabela de cidades */}
            <div className="processo__esquerda">
              <h2 className="secao__titulo">Inscrições</h2>
              <p>
                As inscrições são realizadas exclusivamente online. Candidatos devem estar cursando
                ou ter concluído o Ensino Médio.
              </p>
              <ul className="processo__inscricoes-lista">
                <li>✔ Taxa de inscrição: R$ 180,00</li>
                <li>✔ Isenção para candidatos de baixa renda</li>
                <li>✔ Necessário documentação completa</li>
              </ul>

              {/* Tabela de cidades onde a prova é aplicada (2 colunas × 13 linhas) */}
              <table className="processo__cidades">
                <thead>
                  <tr>
                    <th colSpan={2}>Locais de Provas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Belém</td><td>Natal</td></tr>
                  <tr><td>Belo Horizonte</td><td>Porto Alegre</td></tr>
                  <tr><td>Brasília</td><td>Recife</td></tr>
                  <tr><td>Campinas</td><td>Ribeirão Preto</td></tr>
                  <tr><td>Campo Grande</td><td>Rio de Janeiro</td></tr>
                  <tr><td>Cuiabá</td><td>São José dos Campos</td></tr>
                  <tr><td>Curitiba</td><td>São José do Rio Preto</td></tr>
                  <tr><td>Florianópolis</td><td>Salvador</td></tr>
                  <tr><td>Fortaleza</td><td>São Luís</td></tr>
                  <tr><td>Goiânia</td><td>São Paulo</td></tr>
                  <tr><td>Juiz de Fora</td><td>Teresina</td></tr>
                  <tr><td>Londrina</td><td>Vitória</td></tr>
                  <tr><td>Manaus</td><td></td></tr>
                </tbody>
              </table>
            </div>

            {/* Direita: Quadro de Avisos */}
            <div className="processo__avisos">
              <h3 className="processo__avisos-titulo">Quadro de Avisos</h3>
              <div className="processo__avisos-links">
                <a href="#" className="processo__aviso-link">
                  Solicitação de Isenção de Pagamento da Taxa de Inscrição (SIPTI)
                </a>
                <a href="#" className="processo__aviso-link">
                  Enviar Documentação
                </a>
              </div>
              <div className="processo__avisos-datas">
                <p className="processo__aviso-label">Período para a Solicitação:</p>
                <ul>
                  <li>14 abr a 10 mai 2026</li>
                </ul>
                <p className="processo__aviso-label">Divulgação dos Resultados:</p>
                <ul>
                  <li>22 mai 2025</li>
                </ul>
              </div>
              <p className="processo__aviso-aguarde">
                Aguarde a divulgação das datas para realizar a inscrição.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <h2 className="secao__titulo">Dúvidas Frequentes</h2>
        <div className="faq__lista">
          <details className="faq__item">
            <summary>Quem pode se inscrever no vestibular do ITA?</summary>
            <p>
              Qualquer candidato que esteja cursando ou tenha concluído o Ensino Médio, com no
              máximo 21 anos completos até 31 de dezembro do ano de realização das provas.
            </p>
          </details>
          <details className="faq__item">
            <summary>Como funciona a isenção da taxa de inscrição?</summary>
            <p>
              Candidatos inscritos no CadÚnico ou oriundos de escola pública podem solicitar isenção
              durante o período de inscrições, mediante documentação comprobatória.
            </p>
          </details>
          <details className="faq__item">
            <summary>Quantas vagas são oferecidas?</summary>
            <p>O ITA oferece aproximadamente 120 vagas anuais para o curso de Engenharia.</p>
          </details>
          <details className="faq__item">
            <summary>O ITA oferece bolsas ou auxílios?</summary>
            <p>
              Sim. Todos os alunos aprovados recebem bolsa integral e moradia no campus, por se
              tratar de uma instituição militar federal.
            </p>
          </details>
        </div>
      </section>

      <Footer />
    </>
  )
}
