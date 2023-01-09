let iconMenu = document.querySelector('#icon__menu');
let menu = document.querySelector('#content__menu');
let iconMode = document.querySelector(".ligth");

//----------MENU HAMBURGUESA----------------------
function closeMenu() {
        menu.classList.toggle('active'); 
}

iconMenu.addEventListener('click', closeMenu);
        
let contentMenu = document.querySelectorAll('#content__menu ul li');

for (const li of contentMenu) {
        li.addEventListener("click", closeMenu);
}

//---------------LIGHT-MODE-----------------------
iconMode.addEventListener("click", function () {
    document.body.classList.toggle("ligth");
});
