var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  speed: 700,
  loop: true,
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll('.accordion-button');

  accordions.forEach((btn) => {
    btn.addEventListener('click', function () {
      // remove old active classes
      accordions.forEach(b => b.classList.remove('active-acc'));
      document.querySelectorAll('.accordion-body').forEach(body => body.classList.remove('active-body'));

      // add new classes to current active item
      if (!this.classList.contains('collapsed')) {
        this.classList.add('active-acc');
        const body = this.closest('.accordion-item').querySelector('.accordion-body');
        body.classList.add('active-body');
      }
    });
  });
});
