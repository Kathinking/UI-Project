const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 10000);

function openMovieDetails(description, videoUrl) {
    const modal = document.getElementById('movieDetailsModal');
    const descriptionElement = document.getElementById('movieDescription');
    const videoElement = document.getElementById('movieVideo');

    descriptionElement.textContent = description;
    videoElement.src = videoUrl; // Ensure the URL is in the embed format

    modal.style.display = 'flex';
    toggleBodyScroll(true);
}

function closeMovieDetails() {
    const modal = document.getElementById('movieDetailsModal');
    const videoElement = document.querySelector('.movie-details-video iframe');
    modal.style.display = 'none';
    videoElement.src = ''; // Stop the video
    toggleBodyScroll(false);
}

function submitReview() {
    const reviewText = document.querySelector('.review-input textarea').value;
    if (reviewText.trim() !== '') {
        displayReview(reviewText);
        document.querySelector('.review-input textarea').value = ''; // Clear textarea
    } else {
        alert('Please enter a review.');
    }
}


// lonin page

function toggleLogin() {
  const modal = document.getElementById('loginModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  toggleBodyScroll(modal.style.display === 'flex');
}

function toggleRegister() {
  const modal = document.getElementById('registerModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  toggleBodyScroll(modal.style.display === 'flex');
}

document.getElementById('registerLink').addEventListener('click', function(event) {
  event.preventDefault();
  toggleLogin(); // Close login modal
  toggleRegister(); // Open register modal
});

// moive details page

function openMovieDetails(description, videoUrl) {
  const modal = document.getElementById('movieDetailsModal');
  const descriptionElement = document.getElementById('movieDescription');
  const videoElement = document.getElementById('movieVideo');
  
  console.log("Loading video URL:", videoUrl); // Debug log
  descriptionElement.textContent = description;
  videoElement.src = videoUrl;
  modal.style.display = 'flex';
  toggleBodyScroll(true);

  resetStarRating();
}

function closeMovieDetails() {
  const modal = document.getElementById('movieDetailsModal');
  modal.style.display = 'none';
  toggleBodyScroll(false);
}

function toggleBodyScroll(disable) {
  document.body.style.overflow = disable ? 'hidden' : 'auto';
}

function resetStarRating() {
  const stars = document.querySelectorAll('.star-rating span');
  stars.forEach(star => {
      star.classList.remove('checked');
  });
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('fa-star')) {
      const rating = event.target.dataset.rating;
      const stars = document.querySelectorAll('.star-rating span');

      stars.forEach(star => {
          if (star.dataset.rating <= rating) {
              star.classList.add('checked');
          } else {
              star.classList.remove('checked');
          }
      });

      console.log('Rated: ' + rating + ' stars');
  }
});

function submitReview() {
  const reviewText = document.querySelector('.review-input textarea').value;
  if (reviewText.trim() !== '') {
      displayReview(reviewText);
      document.querySelector('.review-input textarea').value = '';
  } else {
      alert('Please enter a review.');
  }
}

function displayReview(review) {
  const reviewsDiv = document.getElementById('reviews');
  const newReview = document.createElement('p');
  newReview.textContent = review;
  reviewsDiv.appendChild(newReview);

  if (reviewsDiv.children[0].textContent === 'No reviews yet.') {
      reviewsDiv.removeChild(reviewsDiv.children[0]);
  }
}

