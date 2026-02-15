const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    slidesPerView: 5,  // Display 3 cards at once
    spaceBetween: 0,   // Set this to 0 to remove space between slides
});
