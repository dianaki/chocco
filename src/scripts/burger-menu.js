const openMenu = document.querySelector('#openMenu');
const menuContent = document.querySelector('#menuContent');
const closeMenu = document.querySelector('#closeMenu');
const menuList = document.querySelector('#menu__list');

openMenu.addEventListener('click', function(event){
 event.preventDefault();
 menuContent.classList.add('mobile__menu--active');
})

closeMenu.addEventListener('click', function (event){
  event.preventDefault();
  menuContent.classList.remove('mobile__menu--active');
})

menuList.addEventListener('click', function (event){
  event.preventDefault();
  menuContent.classList.remove('mobile__menu--active');
})