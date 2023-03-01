import { gameBoard } from "./hoisting.js";
import { round, players, displayRound, saveDraw, boardID } from "./renderGame.js";

async function draw(){
    gameBoard.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;        
        if(round%2 != 0){
            target.innerText=players[0].playerSymbol
        } else {
            target.innerText=players[1].playerSymbol
        }
        saveDraw(target.id, target.innerText, boardID)
    });
}

export { draw }