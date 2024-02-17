let grid = 3;
let currentPlayer = 'X'

const gameContainer =  document.getElementById("gameContainer");

const handleCellClick = (event) =>{
    event.target.innerText = currentPlayer;
    const index = event.target.getAttribute("index");
    options[index]=currentPlayer;
    console.log(checkWinner())
    if(checkWinner()){
        alert(`${currentPlayer} Won`)
    }else{
        changePlayer();
    }
  
}

const winCondition = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [2,5,8],
    [6,7,8]
];

let options=["","","","","","","","",""]

function init(){
    for(let i=0;i<grid*grid;i++){
            const cell = document.createElement('div');
            cell.classList.add("cell");
            cell.setAttribute("index",i)
            cell.addEventListener("click",handleCellClick)
            gameContainer.appendChild(cell);
       
    }
}

const changePlayer=()=>{
    if(currentPlayer==='X') currentPlayer="O"
    else currentPlayer='X'
}

function checkWinner(){
    let winner = false;

    for(let i=0;i<winCondition.length;i++){
        let condition = winCondition[i];
        let cellA= options[condition[0]];
        let cellB= options[condition[1]];
        let cellC= options[condition[2]];

        if(cellA === ""||cellB === ""||cellC === ""){
            continue;
        }

        if(cellA === cellB && cellB ===cellC){
           winner= true
        }
    }
    return winner

}


document.addEventListener("DOMContentLoaded",init)