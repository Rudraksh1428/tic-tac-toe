let btnAll = document.querySelectorAll(".btns");
let rstbtn = document.querySelector("#rst-btn");
let newbtn = document.querySelector("#new-btn");
let msgp = document.querySelector("#msg");
let msgcont = document.querySelector(".msgcont");
let oScore = 0;
let xScore = 0;
let oScorePara = document.querySelector("#o-score");
let xScorePara = document.querySelector("#x-score");

let turnO=true;
let count=0;

const winPatt= [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];


btnAll.forEach((btns)=>{
    btns.addEventListener("click",() => {
      
        if(turnO){
            btns.innerText="O";
            turnO=false;
        }
        else{
            btns.innerText="X";
            turnO=true;
        }
        btns.disabled=true;
count++;
        checkWinner();

    })
})


const disablebox =()=>{
    for(let btn of btnAll){

        btn.disabled= true;
}
}


const enablebox =()=>{
    for(let btn of btnAll){

        btn.disabled= false;
        btn.innerText="";
}
}


const showWinner = (Winner) =>{

    if (Winner === "O") {
        oScore++;
        oScorePara.innerText = oScore;
    } else {
        xScore++;
        xScorePara.innerText = xScore;
    }

     msgp.innerText=`congratulations, winner is ${Winner}`;
     msgcont.classList.remove("hide");
     disablebox();
}


const showDraw = () => {
    msgp.innerText = "Game was a Draw!";
    msgcont.classList.remove("hide");
    disablebox();
}

 
const checkWinner = () =>{
      let winnerFound = false;
    for(let pattern of winPatt){
  
let posValue1=btnAll[pattern[0]].innerText;
let posValue2=btnAll[pattern[1]].innerText;
let posValue3=btnAll[pattern[2]].innerText;

if(posValue1!="" && posValue2!="" && posValue3!="")
{
if(posValue1===posValue2 && posValue2===posValue3)
{
    winnerFound = true;
   showWinner(posValue1);
    
}
}
    }
     if(count === 9 && !winnerFound){
        showDraw();
     }

};


const resetgame = () => {
    turnO=true;
    count=0;
    enablebox(); 
    msgcont.classList.add("hide");
}


newbtn.addEventListener("click",resetgame);
rstbtn.addEventListener("click", () => {
    oScore = 0;
    xScore = 0;

    oScorePara.innerText = 0;
    xScorePara.innerText = 0;

    resetgame()
});