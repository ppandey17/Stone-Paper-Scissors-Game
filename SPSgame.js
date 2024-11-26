let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");// access
const msg = document.querySelector("#msg");//access

const userScorePara = document.querySelector("#user-score");//access
const compScorePara = document.querySelector("#comp-score");//access

const genCompchoice = () =>{
    const options = ["stone","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText = "Game was draw.Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "you lose!";
        msg.style.backgroundColor = "red";
    }
};

//create a function
const playGame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    //Generate computer choice
    const compchoice = genCompchoice();
    console.log("comp choice = ",compchoice);

    if(userchoice === compchoice){
        //Draw Game
        drawGame();
    } else{
        let userwin=true;
        if(userchoice === "paper"){
            //stone, scissor
            userwin = compchoice === "scissors"? false : true;
        }else if(userchoice === "stone"){
            //paper, scissor
            userwin = compchoice === "paper"? false : true;
        }else if(userchoice === "scissors"){
            //paper, stone
            userwin = compchoice === "stone"? false : true;
        }
        showWinner(userwin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");//for id
        playGame(userchoice);
    })
})