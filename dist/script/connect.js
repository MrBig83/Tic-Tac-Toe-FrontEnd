var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:3000/api/scorelist", {
            method: "GET",
        });
        const data = yield response.json();
        return data;
    });
}
;
function getPlayer(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:3000/api/scorelist/${name}`, {
            method: "GET",
        });
        const data = yield response.json();
        return data;
    });
}
// async function saveNewUser(newHighScore){
//   const response = await fetch(`http://localhost:3000/api/scorelist`, {
//     method: "POST", 
//     body: JSON.stringify(newHighScore),
//     headers: {"Content-Type": "application/json"}
//     //username and NEW score
//   })
// }
export { getAll, getPlayer };
