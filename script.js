const burger = document.querySelector(".header-burger");
const nav = document.querySelector(".header-nav");
const lists = document.querySelectorAll(".header-menu__items");

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
});

lists.forEach((elem) => {
    elem.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
});