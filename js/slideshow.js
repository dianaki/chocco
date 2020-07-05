
$('.reviews__switcher-item').on('click', function(e){
  e.preventDefault();
  let clickIndex = $(this).index();
  let reviewItem = $('.reviews__display-inner').eq(clickIndex);
  $(this).addClass('interactive-avatar--active').siblings().removeClass('interactive-avatar--active');
  reviewItem.addClass('reviews__display-inner--active').siblings().removeClass('reviews__display-inner--active');
})