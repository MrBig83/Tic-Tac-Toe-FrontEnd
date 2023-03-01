import { IMyBody, playerTurn, displayRound } from "./renderGame.js"
import { playerTurnText, gameBoard, fireworks } from "./hoisting.js";
import { renderHighScore } from "./renderUI.js";
import { test, saveUser } from "./saveNewUser.js";



function winCheck(data:IMyBody){
    console.log("data");
    console.log(data); 
    

        if (
        (data.a == "X" && data.b == "X" && data.c == "X") ||
        (data.d == "X" && data.e == "X" && data.f == "X") ||
        (data.g == "X" && data.h == "X" && data.i == "X") ||
        (data.a == "X" && data.d == "X" && data.g == "X") ||
        (data.b == "X" && data.e == "X" && data.h == "X") ||
        (data.c == "X" && data.f == "X" && data.i == "X") ||
        (data.a == "X" && data.e == "X" && data.i == "X") ||
        (data.c == "X" && data.e == "X" && data.g == "X") ||

        (data.a == "O" && data.b == "O" && data.c == "O") ||
        (data.d == "O" && data.e == "O" && data.f == "O") ||
        (data.g == "O" && data.h == "O" && data.i == "O") ||
        (data.a == "O" && data.d == "O" && data.g == "O") ||
        (data.b == "O" && data.e == "O" && data.h == "O") ||
        (data.c == "O" && data.f == "O" && data.i == "O") ||
        (data.a == "O" && data.e == "O" && data.i == "O") ||
        (data.c == "O" && data.e == "O" && data.g == "O")

        ){
        playerTurnText.innerText="THE WINNER IS " + playerTurn;  
        fireworks.style.display="block"
        test();
        renderHighScore();  
        saveUser(playerTurn);
        // setTimeout(() => {
        //     clearBoard()
        //     renderHighScore()    
        // }, 1000);

        // interface INewHighScore{
        //     player:string, 
        //     score: number,
        //     bio: string
        // }

        // const newHighScore:INewHighScore{
        //     "player": playerTurn,
        //     "score": 1,
        //     "bio":"This is a n00b"
        // }

        //saveNewUser(newHighScore)
        //     async function saveNewUser(){
        //         const response = await fetch("http://localhost:3000/users/usersList")
        //         const data = await response.json();
                
        //             const userName =  playerTurn
                    
        //         user ={
        //             userName: playerTurn
        //             }
        //             let obj = data.find(o => o.userName === playerTurn);
        //             if(obj != undefined){                   
        //                 updatePlayer(playerTurn)
        //             } else {
        //                 createPlayers(playerTurn)
        //                 }
        //     }
        gameBoard.style.zIndex = "-1";


    } else {
        displayRound();
    }
}


// function winCheck(){
//     if (
//         (data.a == "X" && data.b == "X" && data.c == "X") ||
//         (data.d == "X" && data.e == "X" && data.f == "X") ||
//         (data.g == "X" && data.h == "X" && data.i == "X") ||
//         (data.a == "X" && data.d == "X" && data.g == "X") ||
//         (data.b == "X" && data.e == "X" && data.h == "X") ||
//         (data.c == "X" && data.f == "X" && data.i == "X") ||
//         (data.a == "X" && data.e == "X" && data.i == "X") ||
//         (data.c == "X" && data.e == "X" && data.g == "X") ||

//         (data.a == "O" && data.b == "O" && data.c == "O") ||
//         (data.d == "O" && data.e == "O" && data.f == "O") ||
//         (data.g == "O" && data.h == "O" && data.i == "O") ||
//         (data.a == "O" && data.d == "O" && data.g == "O") ||
//         (data.b == "O" && data.e == "O" && data.h == "O") ||
//         (data.c == "O" && data.f == "O" && data.i == "O") ||
//         (data.a == "O" && data.e == "O" && data.i == "O") ||
//         (data.c == "O" && data.e == "O" && data.g == "O")

//         (data[0] == "O" && data[1] == "O" && data[2] == "O") ||
//         (data[3] == "O" && data[4] == "O" && data[5] == "O") ||
//         (data[6] == "O" && data[7] == "O" && data[8] == "O") ||
//         (data[0] == "O" && data[3] == "O" && data[6] == "O") ||
//         (data[1] == "O" && data[4] == "O" && data[7] == "O") ||
//         (data[2] == "O" && data[5] == "O" && data[8] == "O") ||
//         (data[0] == "O" && data[4] == "O" && data[8] == "O") ||
//         (data[2] == "O" && data[4] == "O" && data[6] == "O") 

//         ){
//         playerTurnText.innerText="THE WINNER IS " + playerTurn;    
//         setTimeout(() => {
//             clearBoard()
//             renderHighScore()    
//         }, 1000);
        
//         saveNewUser()
//             async function saveNewUser(){
//                 const response = await fetch("http://localhost:3000/users/usersList")
//                 const data = await response.json();
                
//                     const userName =  playerTurn
                    
//                 user ={
//                     userName: playerTurn
//                     }
//                     let obj = data.find(o => o.userName === playerTurn);
//                     if(obj != undefined){                   
//                         updatePlayer(playerTurn)
//                     } else {
//                         createPlayers(playerTurn)
//                         }
//             }
//         gameBoard.style.zIndex = "-1";


//     } else {
//         displayRound();
//     }
// }

export { winCheck, playerTurn }