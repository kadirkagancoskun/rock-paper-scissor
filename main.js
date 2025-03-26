console.log("Hi");

//Define variables playerScore, computerScore

let playerScore=0;
let computerScore=0;

let rockButton = document.querySelector("#rockBtn");
rockButton.addEventListener("click", ()=>{
    alert("rock");
})
//Get computers choice

function getComputerChoice () {
    if (Math.floor(Math.random() * 3)===0){
        return "rock";
    } else if (Math.floor(Math.random() * 3)===1){
        return "paper";
    } else {
        return "scissors";
    }
}


//Play a round and decide the winner of the round and increase/decrease corresponding score

function playRound(a, b){

    if(a=="rock"&b=="scissors"){
        computerScore ++;
        return `Winner is computer. Score: player: ${playerScore} computer: ${computerScore}`
    } else if (a=="paper"&b=="rock"){
        computerScore ++;
        return `Winner is computer. Score: player: ${playerScore} computer: ${computerScore}`
    } else if (a=="scissors"&b=="paper"){
        computerScore ++;
       return `Winner is computer. Score: player: ${playerScore} computer: ${computerScore}`
    } else if (a===b){
        return `No winner. Score: player: ${playerScore} computer: ${computerScore}`
    } else {
        playerScore ++;
        return `Winner is player. Score: player: ${playerScore} computer: ${computerScore}`
    }
}


//Function that plays the game best of five
function playFiveGames(){
    for (let i = 0; i<5; i++){
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        console.log(`Round: ${i + 1} `+ playRound(computerChoice,playerChoice));
    if(playerScore === 3 || computerScore === 3){
        break;
    }
    }
    if(playerScore>computerScore){
        console.log(`Game is over. The winner is player! Score: player: ${playerScore} computer: ${computerScore}`)
    }else if(playerScore<computerScore){
        console.log(`Game is over. The winner is computer! Score: player: ${playerScore} computer: ${computerScore}`)
    }else{
    console.log(`Game is over. No Winner. Score: player: ${playerScore} computer: ${computerScore}`)    
    }
}

playFiveGames();
