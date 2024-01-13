$(".slider__shop").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay: true,
  arrows: true,
  prevArrow: ".arrow__prev",
  nextArrow: ".arrow__next",
});

$('.mobile__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  autoplay: true,
  speed: 1000,
});
