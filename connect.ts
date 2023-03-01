//const url: string = `http://localhost:3000/`;
import { playerTurn } from "./winCheck.js";
import { startBtn } from "./hoisting";

async function getAll() {

  const response = await fetch("http://localhost:3000/api/scorelist", {
    method: "GET",
  });

  const data = await response.json();
  return data;

}; 

async function getPlayer(name: string) {
  const response = await fetch(`http://localhost:3000/api/scorelist/${name}`, {
    method: "GET",
  });
  const data = await response.json();
  return data
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

