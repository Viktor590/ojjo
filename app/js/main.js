$ (function () {


   $('.header-burger').on('click', function () {
   $('.header-top').toggleClass('header-top--active');
 });

  $('.header-partners__slider').slick({
  dots: false,
  nextArrow: false,
  prevArrow: false,
  infinite: true,
  speed: 200,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 4,
      }
    },
  ]
 });

 const mixerCatalog = mixitup('.catalog-top__content', {
    selectors: {
        control: '.catalog-top__filter-btn'
    }
  });
});