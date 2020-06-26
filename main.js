const openMenu = document.querySelector('#openMenu');
const menuContent = document.querySelector('#menuContent');
const closeMenu = document.querySelector('#closeMenu');

openMenu.addEventListener('click', function(event){
 event.preventDefault();
 menuContent.classList.add('menu--active');
})

closeMenu.addEventListener('click', function (event){
  event.preventDefault();
  menuContent.classList.remove('menu--active');
})