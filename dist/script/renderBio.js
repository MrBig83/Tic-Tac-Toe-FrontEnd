var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getPlayer } from "./connect.js";
import { info, cancelInfoBtn, infoBio, infoHeader, btnEditBio, editBioTxt, editBioTxtDiv, btnSaveBio } from "./hoisting.js";
function renderBio(name) {
    return __awaiter(this, void 0, void 0, function* () {
        //const target = e.target as HTMLElement;
        const player = yield getPlayer(name);
        //const response = await fetch("http://localhost:3000/api/")
        console.log(player);
        info.style.display = "block";
        infoBio.style.display = "block";
        cancelInfoBtn.addEventListener("click", hideBioBox);
        infoHeader.innerText = player.player;
        infoBio.innerText = player.bio;
        btnEditBio.style.display = "block";
        btnEditBio.addEventListener("click", () => showEditBio(player));
    });
}
function showEditBio(player) {
    btnEditBio.style.display = "none";
    infoBio.style.display = "none";
    editBioTxtDiv.style.display = "block";
    editBioTxt.value = player.bio;
    btnSaveBio.style.display = "block";
}
function hideBioBox() {
    info.style.display = "none";
    editBioTxtDiv.style.display = "none";
    btnSaveBio.style.display = "none";
}
export { renderBio };
