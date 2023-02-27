import { gridA, gridB, gridC, gridD, gridE, gridF, gridG, gridH, gridI, 
    roundText, playerTurnText, gameBoard, inputs, info, namePlayer1, namePlayer2, playBtn, 
    startBtn, cancelBtn, cancelInfoBtn, btnEditBio, highScorePane, ulName, ulPoints, infoHeader, infoBio, 
    infoScore, editBioTxt, btnSaveBio, btnDeleteUser, editBioTxtDiv, playerTurn, round, userID 
} from "./hoisting.js";


import { getAll } from "./connect.js"; //, getPlayer
import { renderHighScore } from "./renderUI.js";

//getPlayer()
getAll()
renderHighScore()
//renderPrompt()





playBtn.addEventListener("click", () => {
    console.log("Ny klickar vi på play")
})