
// creating board with 76 cells


const createBoard = ()=>{

    let boardNode = document.getElementById("bingo-board")

    for(let i = 0; i <= 76; i++){

      
        cell = document.createElement("div")
        console.log(cell);
        cell.classList.add("theBoard")
        cell.innerText= Math.floor(Math.random()*(76-0)+0)
        boardNode.appendChild(cell)
    
        }
    

}

const buttonClick =  ()=>{
    createBoard();
   let button= document.getElementsByTagName("button")[0]
    button.hidden= true

}
