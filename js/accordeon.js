$('.team__name').on('click', function(){
  let activeItem = $(this.closest('.team__item'));
  activeItem.siblings().removeClass('team__item--active');
  activeItem.toggleClass('team__item--active');
})