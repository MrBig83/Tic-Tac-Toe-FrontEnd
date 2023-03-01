import { getAll } from "./connect.js"
import { renderHighScore } from "./renderUI.js";

async function test(){
    const existingUsers = await getAll()
}

interface IUser{
    player:string, 
    score:number, 
    bio:string
}

async function saveUser(playerTurn:string){
    const existingUsers = await getAll()  
    const user = existingUsers.find((u: IUser) => u.player === playerTurn);
    if (user) {
        await updateScore(playerTurn, user.score);       
        await renderHighScore()
    } else {
        await addNewUser(playerTurn);
        await renderHighScore()
    }
    
    async function addNewUser(playerTurn:string){
        const saveNewUserContent:object = {
            "player":playerTurn, 
            "score":1,
            "bio":"This is a n00b"
        }
        await fetch("http://localhost:3000/api/scorelist", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(saveNewUserContent)
        })
    }

    async function updateScore(playerTurn:string, playerScore:number){
        let newScore:number = playerScore +1;
        const uppdateScoreContent:object = { "score":newScore }
        await fetch(`http://localhost:3000/api/scorelist/${playerTurn}`, {
            method: "PUT", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(uppdateScoreContent)
        })
    }
}

export { test, saveUser, IUser }