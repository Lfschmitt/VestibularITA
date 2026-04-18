// ============================================
//  VESTIBULAR ITA — main.js
// ============================================

// ---------- 1. MENU MOBILE ----------
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.querySelector('.navbar__links');
const navCta     = document.querySelector('.navbar__cta');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const aberto = navLinks.style.display === 'flex';
    navLinks.style.display = aberto ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = '#0a0f1e';
    navLinks.style.padding = '1rem 2rem';
    navLinks.style.gap = '1rem';
    menuToggle.textContent = aberto ? '☰' : '✕';
  });
}

// ---------- 2. HIGHLIGHT LINK ATIVO NO SCROLL ----------
const secoes = document.querySelectorAll('section[id]');
const linksNav = document.querySelectorAll('.navbar__links a');

window.addEventListener('scroll', () => {
  let posicaoAtual = window.scrollY + 120;

  secoes.forEach(secao => {
    if (posicaoAtual >= secao.offsetTop && posicaoAtual < secao.offsetTop + secao.offsetHeight) {
      linksNav.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${secao.id}`) {
          link.style.color = 'var(--cor-acento)';
        }
      });
    }
  });
});

// ---------- 3. ANIMAÇÃO DE ENTRADA (INTERSECTION OBSERVER) ----------
const elementosAnimados = document.querySelectorAll(
  '.datas__card, .provas__card, .faq__item, .hero__content, .inscricoes__texto'
);

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.style.opacity = '1';
        entrada.target.style.transform = 'translateY(0)';
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.12 }
);

elementosAnimados.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observador.observe(el);
});