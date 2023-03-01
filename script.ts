import { 
    roundText, playerTurnText, gameBoard, inputs, info, namePlayer1, namePlayer2, playBtn, 
    startBtn, cancelBtn, cancelInfoBtn, btnEditBio, highScorePane, ulName, ulPoints, infoHeader, infoBio, 
    infoScore, editBioTxt, btnSaveBio, btnDeleteUser, editBioTxtDiv, userID 
} from "./hoisting.js";


import { getAll } from "./connect.js"; //, getPlayer
import { renderHighScore, renderInputBox } from "./renderUI.js";
import { renderBio } from "./renderBio.js";

//getPlayer()
getAll()
renderHighScore()


playBtn.addEventListener("click", () => {
    renderInputBox()
})
//renderPrompt()


playBtn.addEventListener("click", () => {
    console.log("Ny klickar vi på play")
})

//gridA, gridB, gridC, gridD, gridE, gridF, gridG, gridH, gridI, 