/* ============================================================
   SCRIPT PRINCIPAL - EQUIPE DE ROBÓTICA
   Funções: menu mobile, link ativo, animação ao rolar
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Menu mobile (hamburguer) ---
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('aberto');

      // Acessibilidade: informa se o menu está aberto
      const aberto = nav.classList.contains('aberto');
      menuToggle.setAttribute('aria-expanded', aberto);
    });

    // Fecha o menu ao clicar em um link (mobile)
    const linksNav = nav.querySelectorAll('a');
    linksNav.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('aberto');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }


  // --- Marca o link do menu como ativo conforme a página atual ---
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  const linksMenu = document.querySelectorAll('nav a');

  linksMenu.forEach(function (link) {
    const hrefLink = link.getAttribute('href').split('/').pop();
    if (hrefLink === paginaAtual) {
      link.classList.add('ativo');
    }
  });


  // --- Animação de entrada ao rolar (fade-in) ---
  // Adicione a classe "animar" em qualquer elemento HTML para ativá-la
  const elementosAnimados = document.querySelectorAll('.animar');

  if ('IntersectionObserver' in window && elementosAnimados.length > 0) {
    const observer = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
            observer.unobserve(entrada.target); // anima só uma vez
          }
        });
      },
      { threshold: 0.12 }
    );

    elementosAnimados.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback para navegadores sem suporte
    elementosAnimados.forEach(function (el) {
      el.classList.add('visivel');
    });
  }

});

// --- Carrossel de fotos do hero ---
(function () {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;

  let atual = 0;
  slides[atual].classList.add('ativo');

  // Troque o número abaixo para mudar o tempo entre fotos (em milissegundos)
  // 5000 = 5 segundos
  setInterval(function () {
    slides[atual].classList.remove('ativo');
    atual = (atual + 1) % slides.length;
    slides[atual].classList.add('ativo');
  }, 5000);
})();