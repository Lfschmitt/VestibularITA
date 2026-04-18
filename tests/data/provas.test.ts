import { describe, it, expect } from 'vitest'
import { edicoes } from '../../src/data/provas'

describe('edicoes', () => {
  it('contém 19 edições no total', () => {
    expect(edicoes).toHaveLength(19)
  })

  it('cobre os anos de 2008 a 2026', () => {
    const anos = edicoes.map(e => e.ano)
    expect(anos).toContain(2026)
    expect(anos).toContain(2008)
  })

  it('não possui anos duplicados', () => {
    const anos = edicoes.map(e => e.ano)
    expect(new Set(anos).size).toBe(anos.length)
  })

  it('está ordenado do mais recente para o mais antigo', () => {
    const anos = edicoes.map(e => e.ano)
    for (let i = 0; i < anos.length - 1; i++) {
      expect(anos[i]).toBeGreaterThan(anos[i + 1])
    }
  })

  describe('fase 1', () => {
    it('todas as edições possuem prova e gabarito da 1ª fase', () => {
      for (const edicao of edicoes) {
        expect(edicao.fase1.prova).toBe(`/acervoProvas/${edicao.ano}/1fase/prova1.pdf`)
        expect(edicao.fase1.gabarito).toBe(`/acervoProvas/${edicao.ano}/1fase/gabarito.pdf`)
      }
    })
  })

  describe('fase 2 — anos 2019 a 2026 (sem Inglês)', () => {
    const edicoesSemIngles = edicoes.filter(e => e.ano >= 2019)

    it('têm exatamente 4 matérias', () => {
      for (const edicao of edicoesSemIngles) {
        expect(edicao.fase2).toHaveLength(4)
      }
    })

    it('não incluem Inglês', () => {
      for (const edicao of edicoesSemIngles) {
        const nomes = edicao.fase2.map(m => m.nome)
        expect(nomes).not.toContain('Inglês')
      }
    })

    it('incluem Matemática, Química, Física e Português', () => {
      for (const edicao of edicoesSemIngles) {
        const nomes = edicao.fase2.map(m => m.nome)
        expect(nomes).toEqual(
          expect.arrayContaining(['Matemática', 'Química', 'Física', 'Português']),
        )
      }
    })
  })

  describe('fase 2 — anos 2008 a 2018 (com Inglês)', () => {
    const edicoesComIngles = edicoes.filter(e => e.ano <= 2018)

    it('têm exatamente 5 matérias', () => {
      for (const edicao of edicoesComIngles) {
        expect(edicao.fase2).toHaveLength(5)
      }
    })

    it('incluem Inglês', () => {
      for (const edicao of edicoesComIngles) {
        const nomes = edicao.fase2.map(m => m.nome)
        expect(nomes).toContain('Inglês')
      }
    })
  })

  describe('caminhos dos arquivos da fase 2', () => {
    it('seguem o padrão /acervoProvas/{ano}/2fase/{materia}.pdf', () => {
      const slugsEsperados: Record<string, string> = {
        Matemática: 'matematica',
        Química: 'quimica',
        Física: 'fisica',
        Português: 'portugues',
        Inglês: 'ingles',
      }

      for (const edicao of edicoes) {
        for (const materia of edicao.fase2) {
          const slug = slugsEsperados[materia.nome]
          expect(materia.arquivo).toBe(`/acervoProvas/${edicao.ano}/2fase/${slug}.pdf`)
        }
      }
    })
  })
})
