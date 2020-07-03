
$('.reviews__switcher-item').on('click', function(e){
  e.preventDefault();
  let clickIndex = $(this).index();
  let reviewItem = $('.reviews__display-inner').eq(clickIndex);
  $(this).siblings().removeClass('interactive-avatar--active');
  $(this).addClass('interactive-avatar--active')
  

  reviewItem.siblings().removeClass('reviews__display-inner--active');
  reviewItem.addClass('reviews__display-inner--active')
})