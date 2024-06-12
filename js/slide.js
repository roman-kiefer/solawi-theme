let slideIndex = 0;

const seconds = 5;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');

  if (slides.length < 1) {
    setTimeout(showSlides, seconds * 1000);
    return;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, seconds * 1000);
}
showSlides();
