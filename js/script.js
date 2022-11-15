"use strict";

const bg = document.querySelector(".bg")
const content = document.querySelector(".section");
const chasts = document.createElement("div");
chasts.style.cssText = `
    position: absolute;
    margin-left : auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
`


for (let i=0; i < 3; i++){
    let keyFragment = document.createElement("img");
    keyFragment.classList.add("item");
    keyFragment.style.position = "absolute"
    if (i === 1){
        keyFragment.setAttribute('src', './img/1.png')
        keyFragment.style.top = "45px";
        keyFragment.style.left = "100px";
        //keyFragment.style.margin = `${Math.floor(Math.random(0,1) * 100)}px ${Math.floor(Math.random(0,1) * 200)}px`;
    }
    else if (i == 2){
        keyFragment.setAttribute('src', './img/2.png')
        keyFragment.style.top = "160px";
        keyFragment.style.right = "100px";
        //keyFragment.style.margin = `-${Math.floor(Math.random(0,1) * 100)}px ${Math.floor(Math.random(0,1) * 200)}px`;
    }
    else {
        keyFragment.setAttribute('src', './img/3.png')
        keyFragment.style.bottom = "50px";
        keyFragment.style.right = "500px";
        //keyFragment.style.margin = `-${Math.floor(Math.random(0,1) * 100)}px -${Math.floor(Math.random(0,1) * 200)}px`;
    }
    content.append(keyFragment)
}

const keys = document.querySelectorAll(".item");
let fragment = 0;
keys.forEach((key)=>{
    key.addEventListener("click",()=>{
        fragment++
        key.style.display = "none";
        console.log(fragment)
        if (fragment === 3){
            let chst = document.createElement("img");
            let div = document.createElement("div");
            let keyFull = document.createElement("img");
            chst.classList.add("item");
            chst.src = "../img/chaste close.png";
            chasts.append(chst);
            keyFull.src = "../img/key.png"
            keyFull.classList.add("item");
            keyFull.style.width = "128px";
            keyFull.style.height = "128px";
            div.append(keyFull);
            div.classList.add("flexing")
            div.style.cssText = `
            position: absolute;
            margin-left : auto;
            margin-right: auto;
            left: 0;
            right: 0;
            text-align: center;
            `
            content.append(chasts)
            content.append(div)
            keyFull.addEventListener("click",()=>{
                keyFull.style.display = "none";
                chst.style.display = "none";
                let ffl = document.createElement("div");
                ffl.style.cssText = `
                display: flex;
                width: 100%; height:100%
                align-items: center;
                justify-content: center;
            `
            bg.style
            });
        }
    });
});