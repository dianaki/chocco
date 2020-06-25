const openMenu = document.querySelector('#openMenu');
const menuContent = document.querySelector("#menuContent");
const closeMenu = document.querySelector('#closeMenu');

openMenu.addEventListener('click', function(event){
 event.preventDefault();
 menuContent.style.display = `flex`;
})

closeMenu.addEventListener('click', function (event){
  event.preventDefault();
  menuContent.style.display = `none`;
})