// const gridA = document.getElementById("a") as HTMLDivElement;
// const gridB = document.getElementById("b") as HTMLDivElement;
// const gridC = document.getElementById("c") as HTMLDivElement;
// const gridD = document.getElementById("d") as HTMLDivElement;
// const gridE = document.getElementById("e") as HTMLDivElement;
// const gridF = document.getElementById("f") as HTMLDivElement;
// const gridG = document.getElementById("g") as HTMLDivElement;
// const gridH = document.getElementById("h") as HTMLDivElement;
// const gridI = document.getElementById("i") as HTMLDivElement;
const fireworks = document.querySelector(".yeeey") as HTMLDivElement;
const roundText = document.querySelector(".roundText") as HTMLTextAreaElement;
const playerTurnText = document.querySelector(".playerTurn") as HTMLTextAreaElement;
const gameBoard = document.querySelector(".game-board") as HTMLDivElement;
const inputs = document.querySelector(".inputs") as HTMLInputElement;
const info = document.querySelector(".info") as HTMLTextAreaElement;
const namePlayer1 = document.querySelector(".namePlayer1") as HTMLInputElement;
const namePlayer2 = document.querySelector(".namePlayer2") as HTMLInputElement;
const playBtn = document.querySelector(".btnPlay") as HTMLButtonElement;
const startBtn = document.querySelector(".btnStart") as HTMLButtonElement;
const startBtnDiv = document.querySelector(".btn") as HTMLDivElement;
const cancelBtn = document.querySelector(".btnCancel") as HTMLButtonElement;
const cancelInfoBtn = document.querySelector(".btnCancelInfo") as HTMLButtonElement;
const btnEditBio = document.querySelector(".btnEditBio") as HTMLButtonElement;
const highScorePane = document.querySelector(".highScore") as HTMLDivElement
const ulName = document.querySelector(".ulName") as HTMLUListElement;
const ulPoints = document.querySelector(".ulPoints") as HTMLUListElement;
const infoHeader = document.querySelector(".infoHeader") as HTMLTextAreaElement;
const infoBio = document.querySelector(".infoBio") as HTMLTextAreaElement;
const infoScore = document.querySelector(".infoScore") as HTMLTextAreaElement;
const editBioTxt = document.querySelector(".editBioTxt") as HTMLTextAreaElement;
const btnSaveBio = document.querySelector(".btnSaveBio") as HTMLButtonElement;
const btnDeleteUser = document.querySelector(".btnDeleteUser") as HTMLButtonElement;
const editBioTxtDiv = document.querySelector(".editBioTxtDiv") as HTMLTextAreaElement;
const playBtnDiv = document.querySelector(".btnPlayDiv") as HTMLDivElement;

//let playerTurn:string;
//let round:number = 0;
let userID:string;


//gridA, gridB, gridC, gridD, gridE, gridF, gridG, gridH, gridI, 

export { fireworks, playBtnDiv, startBtnDiv, 
    roundText, playerTurnText, gameBoard, inputs, info, namePlayer1, namePlayer2, playBtn, 
    startBtn, cancelBtn, cancelInfoBtn, btnEditBio, highScorePane, ulName, ulPoints, infoHeader, 
    infoBio, infoScore, editBioTxt, btnSaveBio, btnDeleteUser, editBioTxtDiv, userID };