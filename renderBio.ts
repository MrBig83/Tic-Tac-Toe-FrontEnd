import { getPlayer } from "./connect.js";
import { info, cancelInfoBtn, infoBio, infoHeader, btnEditBio, editBioTxt, editBioTxtDiv, btnSaveBio } from "./hoisting.js";

interface IPlayer{
    bio: string, 
    player: string, 
    score: number
}

async function renderBio(name:string){
    //const target = e.target as HTMLElement;

    
    const player: IPlayer = await getPlayer(name)

    
    //const response = await fetch("http://localhost:3000/api/")
    console.log(player);
    info.style.display = "block"
    infoBio.style.display = "block"
    cancelInfoBtn.addEventListener("click", hideBioBox)
    infoHeader.innerText = player.player
    infoBio.innerText = player.bio
    btnEditBio.style.display = "block"
    btnEditBio.addEventListener("click", () => showEditBio(player))
}

function showEditBio(player: IPlayer){
    btnEditBio.style.display = "none"
    infoBio.style.display = "none"
    editBioTxtDiv.style.display = "block"
    editBioTxt.value = player.bio
    btnSaveBio.style.display = "block"

}

function hideBioBox(){
    info.style.display = "none"
    editBioTxtDiv.style.display = "none"
    btnSaveBio.style.display = "none"
}




export { renderBio }