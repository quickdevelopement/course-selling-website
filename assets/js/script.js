const mobileMenu = document.getElementById("mobileMenu");

const navigation = document.getElementById("navigtion");

mobileMenu.addEventListener("click", function () {
  //   console.log('click')
  navigation.classList.toggle("toggle");
});

// Slider

$(".hero-carousel").owlCarousel({
  loop: true,
  // margin:10,
  responsiveClass: true,
  autoplay: true,
  dots: true,
  autoplayTimeout: 5000,
  navText: [
    `<i class="fa-solid fa-chevron-left"></i>`,
    `<i class="fa-solid fa-chevron-right"></i>`,
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
    },
  },
});

$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    dots: true,
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dotsEach: true,
      },
      600: {
        items: 1,
        dotsEach: true,
      },
      768: {
        items: 2,
        dotsEach: true
      },

      992: {
        items: 3,
        dotsEach: true
      },
      1200: {
        items: 4,
        dotsEach: true
      },
    },
  });
});
