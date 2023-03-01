import { highScorePane, namePlayer1, namePlayer2, startBtn, inputs, cancelBtn, gameBoard, roundText, playerTurnText } from "./hoisting.js";
import { draw } from "./draw.js";
import { winCheck } from "./winCheck.js";





let round:number = 0;
let playerTurn:string;
let boardID:string;
interface IMyBody{
    a: string,
    b: string,
    c: string,
    d: string,
    e: string,
    f: string,
    g: string,
    h: string,
    i: string
}
let players = [
    {
        "userName": "",
        "playerSymbol" : "X"
    },
    {
        "userName": "",
        "playerSymbol" : "O"
    }
];

function startGame(){
    highScorePane.style.zIndex="0"
    players[0].userName=namePlayer1.value
    players[1].userName=namePlayer2.value
    startBtn.style.display="none";
    inputs.style.display="none";
    cancelBtn.style.display="none";
    gameBoard.style.zIndex = "1";

    const myBody:IMyBody = {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
        i: ""
    }
    generateBoard(myBody);
    displayRound();
    draw();
}

async function generateBoard(myBody:IMyBody) {
    try{
    const response = await fetch("http://localhost:3000/api/board/new", {
        method: "POST", 
        body: JSON.stringify(myBody),
        headers: {"Content-Type": "application/json"}
    })
    boardID = await response.json()
    console.log(boardID)
    getBoard(boardID)
    } catch (error) {
        console.log(error);
    }
}

async function saveDraw(pos:string, symbol:string, boardID:string){
    
    const content:object = {pos,symbol} 
    console.log(content);
    
    try{
    const response = await fetch(`http://localhost:3000/api/board/move/${boardID}`, {
        method: "PUT", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(content)
    })
    const data:IMyBody = await response.json()
    
    console.log(typeof(data));
    winCheck(data);
    
} catch (error) {
    console.log(error);
}
    // POST till DB-board. Sätt X eller O på gällande POS i DB. 
}



async function getBoard(boardID:string){
    try{
    const response = await fetch(`http://localhost:3000/api/board/${boardID}`)
    const specificBoard = await response.json()
    console.log(specificBoard);
    
    } catch (error) {
        console.log(error);
        
    }
}

function displayRound(){
        
    round = round+1;
    roundText.innerText="Round: " + round;
    if(round%2 != 0){
        playerTurn = players[0].userName;
        playerTurnText.innerText="It is "+players[0].userName+"s turn";
    } else {
        playerTurn = players[1].userName;
        playerTurnText.innerText="It is "+players[1].userName+"s turn";
    }
}

export { startGame, round, players, displayRound, saveDraw, boardID, IMyBody, playerTurn }