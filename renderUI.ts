import { getAll } from "./connect.js";
import { ulName, ulPoints, inputs, cancelBtn, startBtn, info, cancelInfoBtn, namePlayer1, namePlayer2, fireworks, highScorePane } from "./hoisting.js";
import { renderBio } from "./renderBio.js";
import { startGame } from "./renderGame.js";
import { IUser } from "./saveNewUser.js";

fireworks.style.display="none"

async function renderHighScore(){
    
    const highScoreList = await getAll()
        sortHighScore(highScoreList)
        ulName.innerHTML="";
        ulName.innerHTML=`<li class="playerNameHeader">PlayerName:</li>`
        ulPoints.innerHTML="";
        ulPoints.innerHTML=`<li class="playerScoreHeader">Score:</li>`

    for (const player of highScoreList) {
        const liName = document.createElement("li")
        const liPoints = document.createElement("li")
        liName.innerText = player.player;
        liPoints.innerText = player.score;
        ulName.append(liName)
        liName.addEventListener("click", () => renderBio(player.player))
        ulPoints.append(liPoints)
    }
}

function renderInputBox(){
    inputs.style.display = "block"
    cancelBtn.style.display = "block"
    startBtn.style.display = "block"
    //startBtn.style.zIndex="0"
    startBtn.addEventListener("click", startGame)
    cancelBtn.addEventListener("click", () => {
        hideInputBox()
    })
}

function hideInputBox(){
    namePlayer1.value = "";
    namePlayer2.value = "";
    inputs.style.display = "none"
    cancelBtn.style.display = "none"
    startBtn.style.display = "none"
}


function sortHighScore(highScoreList:IUser[]){
    highScoreList.sort((a, b) => {
        if (a.score > b.score){
            return -1;
        } else if (a.score < b.score) {
            return +1;
        } else {
            return 0;
        }
    })

}


export { renderHighScore, renderInputBox }