

// Header Color


const menuBar = document.querySelector("[data-menu-container]");

window.addEventListener("scroll", () => {

    if (window.scrollY > 1) {
        menuBar.classList.add('active');
    } else {
        menuBar.classList.remove('active');
    }
    console.log(menuBar);
});

//Menu hiding system

const menuCancelBtn = document.querySelector("[data-menu-cancel-btn]");
const menuContainer = document.querySelector("[data-menu]");
const menuFull = document.querySelector("[data-menu-full]");
const menuBtn = document.querySelector("[data-menu-btn]");

menuCancelBtn.addEventListener("click", () => {
    menuContainer.classList.remove("hide");
    menuCancelBtn.classList.add("hide");
    menuFull.classList.add("hide");
});

menuBtn.addEventListener("click", () => {
    menuCancelBtn.classList.remove("hide");
    menuContainer.classList.add("hide");
    menuFull.classList.remove("hide");
});


//Svg Roattions
const rotatingSvgs = document.querySelectorAll("[rotating-svg]");
const menuLists = document.querySelectorAll("[data-menu-full-list]");


for (let i = 0; i < rotatingSvgs.length; i++) {
    rotatingSvgs[i].addEventListener("click", () => {
        rotatingSvgs[i].classList.toggle("hide");
        menuLists[i].classList.toggle("hide");
    });
}

// Project Menus Controll
const projectMenuBtn = document.querySelector("[data-project-menu-btn]");
const projectMenu = document.querySelector(".project-menu");
const projectMenuCloseBtn = document.querySelector("[data-project-menu-close-btn]");
const sectionWrapper = document.querySelector(".section-wrapper");


projectMenuBtn.addEventListener("click", () => {

    projectMenu.classList.remove("hide");
    sectionWrapper.classList.remove("hide");
});
projectMenuCloseBtn.addEventListener("click", () => {

    projectMenu.classList.add("hide");
    sectionWrapper.classList.add("hide");
});

sectionWrapper.addEventListener("click", () => {

    if (!sectionWrapper.classList.contains("hide")) {
        projectMenu.classList.add("hide");
        sectionWrapper.classList.add("hide");
    }

});








