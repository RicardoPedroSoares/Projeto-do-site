document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const images = document.querySelectorAll('.carousel img');
  
  let currentIndex = 0;
  const totalImages = images.length;
  let autoPlayInterval;

  // Função para atualizar a posição do carrossel
  function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  // Reinicia o auto-play (chamado após cliques)
  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    }, 5000);
  }

  // Botões
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
    resetAutoPlay();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
    resetAutoPlay();
  });

  // Inicia o auto-play
  resetAutoPlay();

  // Pausa ao passar o mouse (opcional)
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
  carousel.addEventListener('mouseleave', resetAutoPlay);
});