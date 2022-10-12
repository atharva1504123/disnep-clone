
const cardContainer = document.querySelector('.template-container');
const carouselTemplate = document.getElementsByClassName('.template-images');
const nextBtn = document.querySelector('.next-btn')
const preBtn = document.querySelector('.prev-btn')

let index = 1;
width = carouselTemplate[0].clientWidth;
cardContainer.style.transform = 'translateX(' + (-width * index) + 'px)';

// go to next slide

nextBtn.addEventListener('click', nextSlide);
function nextSlide() {
  if (index >= carouselSlides.length - 1) {
    return
  };
  cardContainer.style.transition = 'transform 0.4s ease-out';
  index++;
  cardContainer.style.transform = 'translateX(' + (-width * index) + 'px)';
}

// go to previous slide

preBtn.addEventListener('click', prevSlide);
function prevSlide() {
  if (index <= 0) {
    return
  };
  cardContainer.style.transition = 'transform 0.4s ease-out';
  index--;
  cardContainer.style.transform = 'translateX(' + (-width * index) + 'px)';
}