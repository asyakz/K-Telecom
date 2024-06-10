const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  slidesPerView: 3,
  spaceBetween: 25,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.tariff_plans__slide__btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.tariff_plans__slide__btn').forEach(e => {
        e.textContent = 'Выбрать тариф'
        e.classList.remove('tariff_plans__slide__btn--active');
      })
      this.classList.toggle('tariff_plans__slide__btn--active');
      let buttonText = this.textContent;
      let newButtonText;
      buttonText === 'Выбрать тариф' ? newButtonText = 'Тариф выбран' : newButtonText = 'Выбрать тариф'
      this.textContent = newButtonText;
    });
  });
});

// Плавный скролл

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};