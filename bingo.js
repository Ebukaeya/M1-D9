
// creating board with 76 cells


const createBoard = ()=>{

    let boardNode = document.getElementById("bingo-board")

    for(let i = 0; i <= 76; i++){

      
        cell = document.createElement("div")
        
        cell.classList.add("theBoard")
        cell.id=i
        cell.innerText= i
        
        boardNode.appendChild(cell)
    
        }
    

}

const buttonClick =  ()=>{
    createBoard();
    let randomizeButton = document.querySelector(".buttonDiv")
    randomizeButton.style.display = "flex"
   let button= document.getElementsByTagName("button")[0]
    button.hidden= true

}

let myselectedNumber =[]

const randomize = ()=>{    
    let randomNumber = Math.floor(Math.random()*76)
   if (myselectedNumber.includes(randomNumber)){
    console.log("try again");
   }
   else{
            if(myselectedNumber.length>=20){
                location.reload()  // reload document if the renaom key is pressed 20 times.
            }
            else{
                let selectedDiv = document.getElementById(randomNumber)
                selectedDiv.style.backgroundColor="red"
                myselectedNumber.push(randomNumber)
               }
            
            }
    


}