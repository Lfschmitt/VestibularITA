import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    const elementos = document.querySelectorAll<HTMLElement>(
      '.datas__card, .provas__card, .faq__item, .hero__content, .inscricoes__texto',
    )

    elementos.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    })

    const observador = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).style.opacity = '1'
            ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
            observador.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elementos.forEach(el => observador.observe(el))

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

      {/* PROCESSO SELETIVO */}
      <section className="inscricoes" id="processo">
        <div className="inscricoes__texto">
          <h2 className="secao__titulo">Inscrições</h2>
          <p>
            As inscrições são realizadas exclusivamente online. Candidatos devem estar cursando ou
            ter concluído o Ensino Médio.
          </p>
          <ul className="inscricoes__lista">
            <li>✔ Taxa de inscrição: R$ 180,00</li>
            <li>✔ Isenção para candidatos de baixa renda</li>
            <li>✔ Necessário documentação completa</li>
          </ul>
          <a href="#" className="btn btn--primario">
            Acessar portal de inscrições
          </a>
        </div>
        <div className="inscricoes__imagem">
          <div className="inscricoes__placeholder" />
        </div>
      </section>

      {/* PROVAS */}
      <section className="provas" id="provas">
        <h2 className="secao__titulo">Provas</h2>
        <div className="provas__grid">
          <div className="provas__card">
            <h3>1ª Fase</h3>
            <p>60 questões objetivas de Matemática, Física, Química, Português e Inglês.</p>
          </div>
          <div className="provas__card">
            <h3>2ª Fase</h3>
            <p>
              Provas discursivas de Matemática, Física, Química, Redação e Inglês ao longo de 5
              dias.
            </p>
          </div>
          <div className="provas__card provas__card--destaque">
            <h3>Gabaritos e Provas Anteriores</h3>
            <p>Acesse provas e gabaritos de edições anteriores para se preparar melhor.</p>
            <Link to="/provas" className="btn btn--secundario">
              Ver acervo
            </Link>
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
