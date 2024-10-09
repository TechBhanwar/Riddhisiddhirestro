var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  autoplay: {
    delay: 3000, // Change this value to control the delay between slides (in milliseconds)
    disableOnInteraction: false, // Keeps autoplay running even after user interactions like swiping
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});



$(document).ready(function() {
  const progressFill = document.querySelector(".progress-fill");
  var swiper = new Swiper(".parallax-slider", {
      speed: 1000,
      parallax: true,
      loop: true,
      autoplay: {
          delay: 3000, // Adjust autoplay delay as needed
          disableOnInteraction: false
      },
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
          prev: {
              shadow: true,
              translate: [0, 0, -1000]
          },
          next: {
              translate: ["100%", 0, 0]
          }
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      },
      on: {
          slideChange: function () {
              // Reset progress bar when slide changes
              progressFill.style.width = '0%';
          },
          autoplayTimeLeft(s, time, progress) {
              // Update progress bar width based on autoplay time left
              progressFill.style.width = (1 - progress) * 100 + '%';
          }
      }
  });
});






const orderButton = document.getElementById('orderButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');

orderButton.addEventListener('click', () => {
    popup.style.display = 'flex'; // Show the popup
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the popup
});