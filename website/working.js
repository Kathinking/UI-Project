const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

let currentIndex = 0;

// Next Slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
  updateCarousel();
}

// Previous Slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Go to the last image if currentIndex < 0
  updateCarousel();
}

// Update Carousel
function updateCarousel() {
  const offset = -currentIndex * 100; // Calculate the translation offset
  carouselImages.style.transform = `translateX(${offset}%)`;
}

// Auto-Slide
setInterval(nextSlide, 10000); // Automatically change the slide every 3 seconds


