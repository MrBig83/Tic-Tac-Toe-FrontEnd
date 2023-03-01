var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAll } from "./connect.js";
import { renderHighScore } from "./renderUI.js";
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUsers = yield getAll();
    });
}
function saveUser(playerTurn) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUsers = yield getAll();
        const user = existingUsers.find((u) => u.player === playerTurn);
        if (user) {
            yield updateScore(playerTurn, user.score);
            yield renderHighScore();
        }
        else {
            yield addNewUser(playerTurn);
            yield renderHighScore();
        }
        function addNewUser(playerTurn) {
            return __awaiter(this, void 0, void 0, function* () {
                const saveNewUserContent = {
                    "player": playerTurn,
                    "score": 1,
                    "bio": "This is a n00b"
                };
                yield fetch("http://localhost:3000/api/scorelist", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(saveNewUserContent)
                });
            });
        }
        function updateScore(playerTurn, playerScore) {
            return __awaiter(this, void 0, void 0, function* () {
                let newScore = playerScore + 1;
                const uppdateScoreContent = { "score": newScore };
                yield fetch(`http://localhost:3000/api/scorelist/${playerTurn}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(uppdateScoreContent)
                });
            });
        }
    });
}
export { test, saveUser };
