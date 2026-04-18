export interface Materia {
  nome: string
  arquivo: string
}

export interface Edicao {
  ano: number
  fase1: { prova: string; gabarito: string }
  fase2: Materia[]
}

function fase2Materias(ano: number, incluiIngles: boolean): Materia[] {
  const materias: Materia[] = [
    { nome: 'Matemática', arquivo: `/acervoProvas/${ano}/2fase/matematica.pdf` },
    { nome: 'Química', arquivo: `/acervoProvas/${ano}/2fase/quimica.pdf` },
    { nome: 'Física', arquivo: `/acervoProvas/${ano}/2fase/fisica.pdf` },
    { nome: 'Português', arquivo: `/acervoProvas/${ano}/2fase/portugues.pdf` },
  ]
  if (incluiIngles) {
    materias.push({ nome: 'Inglês', arquivo: `/acervoProvas/${ano}/2fase/ingles.pdf` })
  }
  return materias
}

function criarEdicao(ano: number, incluiIngles: boolean): Edicao {
  return {
    ano,
    fase1: {
      prova: `/acervoProvas/${ano}/1fase/prova.pdf`,
      gabarito: `/acervoProvas/${ano}/1fase/gabarito.pdf`,
    },
    fase2: fase2Materias(ano, incluiIngles),
  }
}

// 2019–2026: 2ª fase sem Inglês (4 matérias)
// 2008–2018: 2ª fase com Inglês (5 matérias)
export const edicoes: Edicao[] = [
  ...[2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019].map(ano => criarEdicao(ano, false)),
  ...[2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008].map(ano =>
    criarEdicao(ano, true),
  ),
]
