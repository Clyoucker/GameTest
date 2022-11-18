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
    gameMenu: ["NewGame","Continue"],
    gameKeyFragments: ["../../assets/img/games/keyFragments/fragmentOne.png","../../assets/img/games/keyFragments/fragmentTwo.png","../../assets/img/games/keyFragments/fragmentThree.png"],
    gameBg: ["../../assets/img/games/BG/Menu.jpg","../../assets/img/games/BG/Play.jpg","../../assets/img/games/BG/Victory.jpg"],
    gamePrize: ["../../assets/img/games/prizes/prizeOne.png","../../assets/img/games/prizes/prizeTwo.png","../../assets/img/games/prizes/prizeThree.png"],
    gameTime: 0,
    gameFragmentCount: 0,

    createMenu(args = this.gameMenu){
        const Menu = document.createElement("div");
        Menu.classList.add("menu");
        for(let i = 0; i < args.length; i++){
            let btn = document.createElement("button");
            btn.classList.add("button","button_menu");
            btn.textContent=args[i]
            btn.addEventListener("click",()=>{
                this.startGame();
            })
            Menu.append(btn);
        }
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


    createLevels(){
        
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

