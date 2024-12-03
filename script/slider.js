let currentIndex = 0;

export function updateSlider() {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  if (!sliderWrapper) {
    console.error('slider-wrapper not found');
    return;
  }
  sliderWrapper.style.transform = `translateX(-${currentIndex * 28}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  const slider = document.querySelector('.slider');

  if (!slides.length || !prevBtn || !nextBtn || !slider) {
    console.error('Required DOM elements not found');
    return;
  }

  const totalSlides = slides.length;

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }, 2500);

  slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
  slider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 2500);
  });
});


