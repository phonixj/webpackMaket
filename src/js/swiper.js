var windowWidth = window.innerWidth;
if (windowWidth < 768) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

