import { getAll } from "./connect.js";
import { ulName, ulPoints } from "./hoisting.js";


async function renderHighScore(){
    const highScoreList = await getAll()
    for (const player of highScoreList) {
        const liName = document.createElement("li")
        const liPoints = document.createElement("li")
        liName.innerText = player.player;
        liPoints.innerText = player.score;
        ulName.append(liName)
        ulPoints.append(liPoints)
        console.log(player.player);
        console.log(player.score);
        
    }
    
}


export { renderHighScore }