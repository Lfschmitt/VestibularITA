import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Footer from '../../src/components/Footer'

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  )
}

describe('Footer', () => {
  it('renderiza sem erros', () => {
    renderFooter()
  })

  it('exibe a sigla ITA', () => {
    renderFooter()
    expect(screen.getByText('ITA')).toBeInTheDocument()
  })

  it('exibe o nome do instituto', () => {
    renderFooter()
    expect(screen.getByText(/Instituto Tecnológico de Aeronáutica/)).toBeInTheDocument()
  })

  it('exibe o aviso de site não oficial', () => {
    renderFooter()
    expect(screen.getByText(/Site não oficial/)).toBeInTheDocument()
  })

  describe('links de navegação', () => {
    it('exibe os quatro links', () => {
      renderFooter()
      expect(screen.getByRole('link', { name: 'Sobre' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Inscrições' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Provas' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'FAQ' })).toBeInTheDocument()
    })

    it('link Sobre aponta para /#sobre', () => {
      renderFooter()
      expect(screen.getByRole('link', { name: 'Sobre' })).toHaveAttribute('href', '/#sobre')
    })

    it('link Inscrições aponta para /#processo', () => {
      renderFooter()
      expect(screen.getByRole('link', { name: 'Inscrições' })).toHaveAttribute(
        'href',
        '/#processo',
      )
    })

    it('link Provas aponta para /provas', () => {
      renderFooter()
      expect(screen.getByRole('link', { name: 'Provas' })).toHaveAttribute('href', '/provas')
    })

    it('link FAQ aponta para /#faq', () => {
      renderFooter()
      expect(screen.getByRole('link', { name: 'FAQ' })).toHaveAttribute('href', '/#faq')
    })
  })
})
