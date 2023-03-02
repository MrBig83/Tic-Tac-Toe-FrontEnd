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
import { info, cancelInfoBtn, infoBio, infoHeader, btnEditBio, editBioTxt, editBioTxtDiv, btnSaveBio, playBtnDiv, startBtnDiv, highScorePane, btnDeleteUser } from "./hoisting.js";
function renderBio(name) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Render bio");
        const player = yield getPlayer(name);
        info.style.display = "block";
        infoHeader.innerText = player.player;
        infoBio.style.display = "block";
        infoBio.innerText = player.bio;
        btnEditBio.style.display = "block";
        btnEditBio.addEventListener("click", () => {
            console.log("Show Edit");
            showEditBio(player);
        });
        cancelInfoBtn.addEventListener("click", () => {
            console.log("Hide bio box");
            hideBioBox();
        });
        btnDeleteUser.addEventListener("click", () => {
            console.log("Delete user");
            //Delete user saknar endpoint ========================================== Delete user saknar endpoint =============================
        });
    });
}
//======= ====== ====== remove event listener på varenda jävla knapp jävel. ===== ===== =====
function hideBioBox() {
    console.log("Inne i Hide bio box");
    info.style.display = "none";
    editBioTxtDiv.style.display = "none";
    btnSaveBio.style.display = "none";
    startBtnDiv.style.zIndex = "1";
    playBtnDiv.style.zIndex = "0";
    highScorePane.style.zIndex = "0";
    infoHeader.innerText = "";
    infoBio.innerText = "";
}
function showEditBio(player) {
    console.log("Visa edit bio");
    btnEditBio.style.display = "none";
    infoBio.style.display = "none";
    editBioTxtDiv.style.display = "block";
    playBtnDiv.style.zIndex = "-1";
    highScorePane.style.zIndex = "-1";
    startBtnDiv.style.zIndex = "-1";
    editBioTxt.value = player.bio;
    btnSaveBio.style.display = "block";
    btnSaveBio.addEventListener("click", () => {
        saveBio(player);
    });
}
function saveBio(player) {
    return __awaiter(this, void 0, void 0, function* () {
        const uppdateBioContent = { "bio": editBioTxt.value };
        console.log("Nu sparar vi Bio");
        yield fetch(`http://localhost:3000/api/scorelist/bio/${player.player}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(uppdateBioContent)
        });
        renderBio(player.player);
        editBioTxtDiv.style.display = "none";
        infoBio.style.display = "block";
        btnSaveBio.style.display = "none";
        btnEditBio.style.display = "block";
        highScorePane.style.zIndex = "0";
    });
}
export { renderBio };
