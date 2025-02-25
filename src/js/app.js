console.log("Hello!!!")

import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const menuToggle = document.querySelector('.sideMenu_icon');
const sideMenu = document.querySelector('.header_nav');


document.addEventListener('DOMContentLoaded', () => {
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('active_sideMenu');
        menuToggle.classList.toggle('open');
    });
});