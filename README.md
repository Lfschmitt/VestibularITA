# ✈️ ITA Vestibular — Redesign do Site

> Repaginação moderna do site do vestibular do Instituto Tecnológico de Aeronáutica (ITA), com foco em usabilidade, acessibilidade e design contemporâneo.

---

## 📌 Sobre o Projeto

O site oficial do vestibular do ITA, apesar de sua importância para milhares de candidatos por ano, apresenta limitações de usabilidade e design. Este projeto cria uma versão repaginada, mais intuitiva e acessível, mantendo todas as informações essenciais de forma clara e organizada.

---

## 🎯 Objetivos

- Modernizar a interface visual do site
- Melhorar a experiência do usuário (UX) para candidatos, pais e professores
- Garantir responsividade para dispositivos móveis
- Aumentar a acessibilidade (seguindo diretrizes WCAG)
- Organizar melhor as informações sobre inscrições, provas e resultados

---

## 🛠️ Tecnologias Utilizadas

- **React 19** com **TypeScript**
- **React Router DOM 7** — roteamento entre páginas
- **Vite** — bundler e servidor de desenvolvimento
- **CSS customizado** — variáveis CSS, temas e animações próprias
- **Fontes:** Syne (títulos) e DM Sans (corpo) via Google Fonts
- **Vitest + Testing Library** — testes unitários
- **Vercel** — deploy e hospedagem

---

## 🚀 Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/Lfschmitt/VestibularITA.git

# Acesse a pasta do projeto
cd VestibularITA

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

---

## 📁 Estrutura de Pastas

```
VestibularITA/
├── public/
│   └── acervoProvas/       # PDFs das provas e gabaritos por ano
├── assets/
│   ├── css/                # Estilos globais (style.css, provas.css)
│   └── img/                # Imagens e logo
├── src/
│   ├── components/         # Navbar e Footer
│   ├── pages/              # Home e Provas
│   ├── data/               # Dados das provas (provas.ts)
│   ├── App.tsx             # Roteamento principal
│   └── main.tsx            # Ponto de entrada
├── tests/                  # Testes unitários
├── index.html
├── vite.config.ts
└── package.json
```

---

## 📄 Páginas Implementadas

- [x] **Home** — Sobre o ITA, processo seletivo 2027, inscrições, avisos e FAQ
- [x] **Provas** — Acervo de provas e gabaritos de 2008 a 2026 em formato acordeão

---

## 🧪 Testes

```bash
# Rodar os testes uma vez
npm test

# Rodar em modo watch
npm run test:watch

# Gerar relatório de cobertura
npm run test:coverage
```

Os testes cobrem o componente Footer e a estrutura de dados das provas (19 edições, 2008–2026). O pipeline de CI roda os testes automaticamente em todo Pull Request para a branch `main`.

---

## 🤝 Como Contribuir

1. Faça um **fork** do repositório
2. Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
3. Faça o commit das suas alterações: `git commit -m 'feat: adiciona minha feature'`
4. Faça o push para a branch: `git push origin feature/minha-feature`
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

## ⚠️ Aviso

Este é um projeto **não oficial**, desenvolvido de forma independente com fins educacionais e de aprendizado. Não possui nenhum vínculo com o ITA ou com o Comando da Aeronáutica.

---

<p align="center">Feito com 💙 por <a href="https://github.com/Lfschmitt">Lfschmitt</a></p>
