"use strict";
const burgerBtn = document.querySelector(".burger__btn");
const burgerMenu = document.querySelector(".menu__container");
// Copening Burger Menu
burgerBtn.parentElement.addEventListener("click", function(e) {
    burgerBtn.classList.toggle("_open");
    burgerMenu.classList.toggle("_open");
});

//# sourceMappingURL=index.98db6de8.js.map
