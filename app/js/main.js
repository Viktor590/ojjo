$ (function () {


  $('.header-partners__slider').slick({
  dots: false,
  nextArrow: false,
  prevArrow: false,
  infinite: true,
  speed: 200,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
 });

 const mixerCatalog = mixitup('.catalog-top__content', {
    selectors: {
        control: '.catalog-top__filter-btn'
    }
  });
});