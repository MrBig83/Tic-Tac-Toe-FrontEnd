import { getPlayer } from "./connect.js";
import { info, cancelInfoBtn, infoBio, infoHeader, btnEditBio, editBioTxt, 
    editBioTxtDiv, btnSaveBio, playBtnDiv, startBtn, startBtnDiv, highScorePane, btnDeleteUser } from "./hoisting.js";

interface IPlayer{
    bio: string, 
    player: string, 
    score: number
}

async function renderBio(name:string){
    console.log("Render bio");
        
    const player: IPlayer = await getPlayer(name)

    info.style.display = "block"
    infoHeader.innerText = player.player
    infoBio.style.display ="block"
    infoBio.innerText = player.bio
    btnEditBio.style.display = "block"
    btnEditBio.addEventListener("click", () => {    
        console.log("Show Edit");
           
        showEditBio(player)
        
    })
    cancelInfoBtn.addEventListener("click", () => {
        console.log("Hide bio box");
        
        hideBioBox()
    })
    btnDeleteUser.addEventListener("click", () => {
        console.log("Delete user");
        //Delete user saknar endpoint ========================================== Delete user saknar endpoint =============================
    })
}
//======= ====== ====== remove event listener på varenda jävla knapp jävel. ===== ===== =====

function hideBioBox(){   
    console.log("Inne i Hide bio box");
    
    info.style.display = "none"
    editBioTxtDiv.style.display = "none"
    btnSaveBio.style.display = "none"

    startBtnDiv.style.zIndex="1"
    playBtnDiv.style.zIndex= "0"
    highScorePane.style.zIndex="0"

    infoHeader.innerText = "";
    infoBio.innerText = "";
    
}

function showEditBio(player: IPlayer){
    
    console.log("Visa edit bio");
    
    btnEditBio.style.display = "none"
    infoBio.style.display = "none"
    editBioTxtDiv.style.display = "block"
    playBtnDiv.style.zIndex= "-1"
    highScorePane.style.zIndex="-1"
    startBtnDiv.style.zIndex="-1"
    editBioTxt.value = player.bio
    btnSaveBio.style.display = "block"
    btnSaveBio.addEventListener("click", () => {
        saveBio(player)
    })
}


async function saveBio(player: IPlayer){

    const uppdateBioContent:object = { "bio":editBioTxt.value }
    
    console.log("Nu sparar vi Bio");

    await fetch(`http://localhost:3000/api/scorelist/bio/${player.player}`, {
        method: "PUT", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(uppdateBioContent)
    })

    renderBio(player.player)
    
    editBioTxtDiv.style.display = "none"
    infoBio.style.display = "block"
    btnSaveBio.style.display = "none"
    btnEditBio.style.display = "block"
    highScorePane.style.zIndex="0"
}


export { renderBio, IPlayer }