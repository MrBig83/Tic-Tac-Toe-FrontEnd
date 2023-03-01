import { playBtn } from "./hoisting.js";
import { getAll } from "./connect.js"; //, getPlayer
import { renderHighScore, renderInputBox } from "./renderUI.js";
//getPlayer()
getAll();
renderHighScore();
playBtn.addEventListener("click", () => {
    renderInputBox();
});
//renderPrompt()
playBtn.addEventListener("click", () => {
    console.log("Ny klickar vi på play");
});
//gridA, gridB, gridC, gridD, gridE, gridF, gridG, gridH, gridI, 
