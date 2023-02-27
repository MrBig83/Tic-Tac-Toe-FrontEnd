import { getAll } from "./connect.js";
import { ulName, ulPoints, inputs, cancelBtn, startBtn, info, cancelInfoBtn, namePlayer1, namePlayer2 } from "./hoisting.js";
import { renderBio } from "./renderBio.js";


async function renderHighScore(){
    const highScoreList = await getAll()
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





export { renderHighScore, renderInputBox }