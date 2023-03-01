var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { highScorePane, namePlayer1, namePlayer2, startBtn, inputs, cancelBtn, gameBoard, roundText, playerTurnText } from "./hoisting.js";
import { draw } from "./draw.js";
import { winCheck } from "./winCheck.js";
let round = 0;
let playerTurn;
let boardID;
let players = [
    {
        "userName": "",
        "playerSymbol": "X"
    },
    {
        "userName": "",
        "playerSymbol": "O"
    }
];
function startGame() {
    highScorePane.style.zIndex = "0";
    players[0].userName = namePlayer1.value;
    players[1].userName = namePlayer2.value;
    startBtn.style.display = "none";
    inputs.style.display = "none";
    cancelBtn.style.display = "none";
    gameBoard.style.zIndex = "1";
    const myBody = {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
        i: ""
    };
    generateBoard(myBody);
    displayRound();
    draw();
}
function generateBoard(myBody) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("http://localhost:3000/api/board/new", {
                method: "POST",
                body: JSON.stringify(myBody),
                headers: { "Content-Type": "application/json" }
            });
            boardID = yield response.json();
            console.log(boardID);
            getBoard(boardID);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function saveDraw(pos, symbol, boardID) {
    return __awaiter(this, void 0, void 0, function* () {
        const content = { pos, symbol };
        console.log(content);
        try {
            const response = yield fetch(`http://localhost:3000/api/board/move/${boardID}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(content)
            });
            const data = yield response.json();
            console.log(typeof (data));
            winCheck(data);
        }
        catch (error) {
            console.log(error);
        }
        // POST till DB-board. Sätt X eller O på gällande POS i DB. 
    });
}
function getBoard(boardID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://localhost:3000/api/board/${boardID}`);
            const specificBoard = yield response.json();
            console.log(specificBoard);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function displayRound() {
    round = round + 1;
    roundText.innerText = "Round: " + round;
    if (round % 2 != 0) {
        playerTurn = players[0].userName;
        playerTurnText.innerText = "It is " + players[0].userName + "s turn";
    }
    else {
        playerTurn = players[1].userName;
        playerTurnText.innerText = "It is " + players[1].userName + "s turn";
    }
}
export { startGame, round, players, displayRound, saveDraw, boardID, playerTurn };
