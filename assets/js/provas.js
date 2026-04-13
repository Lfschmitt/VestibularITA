// ============================================
//  VESTIBULAR ITA — provas.js
//  Lógica de filtro do acervo de provas
// ============================================

const filtroAno  = document.getElementById('filtroAno');
const filtroFase = document.getElementById('filtroFase');
const btnLimpar  = document.getElementById('btnLimpar');
const semResultados = document.getElementById('semResultados');

function aplicarFiltros() {
  const ano  = filtroAno.value;
  const fase = filtroFase.value;

  const blocos = document.querySelectorAll('.acervo__ano-bloco');
  let totalVisiveis = 0;

  blocos.forEach(bloco => {
    // Filtra pelo ano
    if (ano && bloco.dataset.ano !== ano) {
      bloco.classList.add('oculto');
      return;
    }
    bloco.classList.remove('oculto');

    // Filtra os grids e subtítulos por fase
    const grids     = bloco.querySelectorAll('.acervo__grid');
    const subtitulos = bloco.querySelectorAll('.fase-subtitulo');

    grids.forEach(grid => {
      const fasGrid = grid.dataset.fase;
      if (fase && fasGrid !== fase) {
        grid.classList.add('oculto');
      } else {
        grid.classList.remove('oculto');
        totalVisiveis += grid.querySelectorAll('.prova-card').length;
      }
    });

    subtitulos.forEach(sub => {
      const fasSub = sub.dataset.fase;
      if (fase && fasSub !== fase) {
        sub.classList.add('oculto');
      } else {
        sub.classList.remove('oculto');
      }
    });

    // Se todos os grids do bloco estão ocultos, esconde o bloco
    const gridsVisiveis = [...grids].filter(g => !g.classList.contains('oculto'));
    if (gridsVisiveis.length === 0) {
      bloco.classList.add('oculto');
    }
  });

  semResultados.style.display = totalVisiveis === 0 ? 'block' : 'none';
}

function limparFiltros() {
  filtroAno.value  = '';
  filtroFase.value = '';
  aplicarFiltros();
}

filtroAno.addEventListener('change', aplicarFiltros);
filtroFase.addEventListener('change', aplicarFiltros);
btnLimpar.addEventListener('click', limparFiltros);