const accoMenu = document.querySelector(".menu-acco");
const menuItem = document.querySelectorAll(".menu-acco__item");
const itemLength = menuItem.length;

for (var i = 0; i < itemLength; i++){

  menuItem[i].addEventListener("click", function(event){
    event.stopPropagation();
    event.preventDefault();

    if (this.classList.contains("menu-acco__item--active")){

      this.classList.remove("menu-acco__item--active");
    } else {

      for (var i = 0; i < itemLength; i++){
        menuItem[i].classList.remove("menu-acco__item--active");
      }

      this.classList.add("menu-acco__item--active");                    
    }
  })
};

accoMenu.addEventListener("click", function(){

  for (i = 0; i < itemLength; i++){
    menuItem[i].classList.remove("menu-acco__item--active");
  }
});