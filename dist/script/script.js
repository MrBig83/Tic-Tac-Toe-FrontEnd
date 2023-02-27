import { playBtn } from "./hoisting.js";
import { getAll } from "./connect.js"; //, getPlayer
import { renderHighScore } from "./renderUI.js";
//getPlayer()
getAll();
renderHighScore();
//renderPrompt()
playBtn.addEventListener("click", () => {
    console.log("Ny klickar vi på play");
});
