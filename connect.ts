//const url: string = `http://localhost:3000/`;

async function getAll() {

  const response = await fetch("http://localhost:3000/api/scorelist", {
    method: "GET",
    //mode: "no-cors",
    // headers: {
    //     "Content-Type":"application/json"
    // }
  });
  //console.log(response);

  const data = await response.json();
  return data;

}; 
async function getPlayer(name: string) {

  const response = await fetch(`http://localhost:3000/api/scorelist/${name}`, {
    method: "GET",
    //mode: "no-cors",
    // headers: {
    //     "Content-Type":"application/json"
    // }
  });
  //console.log(response);

  const data = await response.json();
  //console.log(data);
  return data
}

export { getAll, getPlayer }; 

// function test(){

//     fetch (url, {
//                 method: `GET`,
//                 mode: `no-cors`,
//                 // headers: {
//                 //     "Content-Type":"application/json"
//                 // }
//             })
//     .then(response => response.json())
//     .then(data => console.log(data))
// }
// export { test }
