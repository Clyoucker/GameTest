"use strict";

const gameWindow = document.querySelector("#GameWindow");
const gameMain = document.querySelector(".main");
let gameBg = document.querySelector(".game_bg");

const getPosX = () => {
    let posX = Math.floor(Math.random() * gameWindow.clientWidth);
    return posX + "px";
}
const getPosY = () => {
    let posY = Math.floor(Math.random() * gameWindow.clientHeight);
    return posY + "px";
}

const Game = {
    gameMenu: [
        {id:"levels",text:"Select Levels"},
        {id:"continue",text:"Continue"},
        {id:"extit",text:"exit"},
    ],
    gameKeyFragments: ["../../assets/img/games/keyFragments/fragmentOne.png","../../assets/img/games/keyFragments/fragmentTwo.png","../../assets/img/games/keyFragments/fragmentThree.png"],
    gameBg: ["../../assets/img/games/BG/Menu.jpg","../../assets/img/games/BG/Play.jpg","../../assets/img/games/BG/Victory.jpg"],
    gamePrize: ["../../assets/img/games/prizes/prizeOne.png","../../assets/img/games/prizes/prizeTwo.png","../../assets/img/games/prizes/prizeThree.png"],
    gameLevels: ["../../assets/img/games/levels/levelOne.jpg","../../assets/img/games/levels/levelTwo.jpg","../../assets/img/games/levels/levelThree.jpg"],
    gameTime: 0,
    gameFragmentCount: 0,

    createButton(id,text){
        const btn = document.createElement("button");
        btn.classList.add("button","button_menu");
        btn.id = id;
        btn.textContent = text;
        return btn;
    },

    createMenu(args = this.gameMenu){
        const Menu = document.createElement("div");
        Menu.classList.add("menu");
        Menu.append(this.createButton("levels","Select Levels"));
        Menu.append(this.createButton("continue","Continue"));

        Menu.childNodes.forEach((btn) => {
            btn.addEventListener("click",()=>{
                let btnId = btn.id;
                switch(btnId){
                    case "levels": this.createLevels(); break;
                    //case "continue": this.continueLevel();
                }
            })
        })


        gameBg.src = this.gameBg[0];
        gameWindow.prepend(Menu);
    },

    createPlay(){
        gameBg.src = this.gameBg[1];
        const Play = document.createElement("div");
        Play.classList.add("play");
        document.querySelector(".menu").remove();
        gameWindow.prepend(Play);
    },

    createSlider(){
        const slider = document.createElement("slider");
        const left = document.createElement("span");
        const right = document.createElement("span");
        slider.classList.add("slider");
        left.id = "left"; right.id = "right";
        left.classList.add("icon","slide","icon-left");
        right.classList.add("icon","slide","icon-right");
        slider.append(left,right);
        return slider;
    },

    createLevels(){
        let slider = this.createSlider();
        let pos = 0;
        const Levels = document.createElement("div");
        const Slides = document.createElement("div");
        Levels.classList.add("levels");
        Slides.classList.add("slides");
        
        document.querySelector(".menu").remove();
        for (let i = 0; i < this.gameLevels.length; i++){
            let level = document.createElement("img");
            level.style.width = gameWindow.clientWidth + "px";
            level.src = this.gameLevels[i];
            level.id = i;
            Slides.append(level);
        }

        Levels.append(Slides,slider);
        gameWindow.prepend(Levels);

        slider.childNodes.forEach((slide) => {
            slide.addEventListener("click",() => {
                let slideId = slide.id;
                if (slideId === "left"){
                    pos += gameWindow.clientWidth;
                    document.querySelector(".slides").style.left = pos + "px";
                }
                else {
                    pos -= gameWindow.clientWidth;
                    document.querySelector(".slides").style.left = pos + "px";
                }
            });
        });
        


    },

    generatePrize(){
        const Prize = document.createElement("div");
        const img = document.createElement("img");
        Prize.classList.add("prize");
        img.src = this.gamePrize[Math.floor(Math.random() * this.gamePrize.length)];
        Prize.append(img);
        return Prize;
    },

    createWin(){
        gameBg.style.filter = "brightness(40%)";
        const Win = document.createElement("div");
        const WinContent = document.createElement("div");
        const Text = document.createElement("p");
        gameBg.src = Game.gameBg[2];
        Text.textContent = "Поздравляем! Вы выиграли очень дорогую вещь!"
        WinContent.classList.add("win-text");
        Win.classList.add("win");
        WinContent.append(Text);
        Win.append(WinContent);
        Win.prepend(this.generatePrize());
        gameWindow.prepend(Win);
    },


    generateKeyFragments(){
        //const playWindow = document.querySelector(".")
        for (let i = 0; i < this.gameKeyFragments.length; i++){
            let fragment = document.createElement("div");
            let img = document.createElement("img");

            fragment.setAttribute("id",i);
            fragment.style.position = "absolute";
            fragment.classList.add("fragment");
            img.src = this.gameKeyFragments[i];
            fragment.append(img);
            fragment = this.addObjRandomPos(fragment,getPosX(),getPosY());
            fragment.addEventListener("click",() => {
                fragment.style.display = "none";
                Game.gameFragmentCount ++;
            })
            document.querySelector(".play").prepend(fragment)
        }
    },

    addObjRandomPos(obj,posX,poxY){
        obj.style.left = posX;
        obj.style.top = poxY;
        return obj
    },


    startGame(){
        this.createPlay();
        this.generateKeyFragments();
        let time = setInterval(()=>{
            console.log(Game.gameTime);
            Game.gameTime++;
            if (Game.gameTime === 120){
                alert("You Lose!");
                clearInterval(time);
                document.querySelector(".play").remove();
                Game.createMenu();
            }
            else if (Game.gameFragmentCount === Game.gameKeyFragments.length){
                alert("You Win!");
                clearInterval(time);
                document.querySelector(".play").remove();
                Game.createWin();
            }
        },1000);
    },
}

Game.createMenu();
//Game.createWin();

