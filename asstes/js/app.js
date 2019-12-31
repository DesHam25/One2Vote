






AOS.init({
     offset: 100,
     duration: 1500
});

$(function () {
     $('.owl-carousel.testimonial-carousel').owlCarousel({
          nav: true,
          navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
          dots: false,
          responsive: {
               0: {
                    items: 1,
               },
               750: {
                    items: 2,
               }
          }
     });
});