let carousel = $('.carousel__list').bxSlider({
  controls: false,
  pager: false
});

$(".arrow--right").click(e=> {
  e.preventDefault();
  carousel.goToNextSlide();
  
})

$(".arrow--left").click(e=> {
  e.preventDefault();
  carousel.goToPrevSlide();
})