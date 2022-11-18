"use strict";

const iconTheme = document.querySelector(".icon-theme");
const header = document.querySelector(".header");
const buttons = document.querySelectorAll(".button");
const main = document.querySelector(".main");
const theme = document.querySelector("body");


iconTheme.addEventListener("click",()=>{
    theme.classList.toggle("page_theme_dark");
    if (theme.classList.contains("page_theme_dark")){
        iconTheme.style.rotate = "180deg";
    }
    else {iconTheme.style.rotate = "-180deg";}
});
