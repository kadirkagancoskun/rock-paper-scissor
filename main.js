console.log("Hi");

//Define variables playerScore, computerScore

let playerScore=0;
let computerScore=0;

let roundContainer = document.querySelector("#roundContainer");

let rockButton = document.querySelector("#rockBtn");
rockButton.addEventListener("click", ()=>{
    let computerChoice = getComputerChoice();
    playRound(computerChoice, rockButton.value);
})

let paperButton = document.querySelector("#paperBtn");
paperButton.addEventListener("click", ()=>{
    let computerChoice = getComputerChoice();
    playRound(computerChoice, paperButton.value);
})

let scissorsButton = document.querySelector("#scissorsBtn");
scissorsButton.addEventListener("click", ()=>{
    let computerChoice = getComputerChoice();
    playRound(computerChoice, scissorsButton.value);
})

//Get player choice using buttons

function getPlayerChoice (btnValue){

}

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
    if(computerScore+playerScore<5){

    if(a=="rock"&b=="scissors"){
        computerScore ++;
        roundContainer.textContent = `Computer wins the round. Score: player: ${playerScore} computer: ${computerScore}`
    } else if (a=="paper"&b=="rock"){
        computerScore ++;
        roundContainer.textContent = `Computer wins the round. Score: player: ${playerScore} computer: ${computerScore}`
    } else if (a=="scissors"&b=="paper"){
        computerScore ++;
        roundContainer.textContent = `Computer wins the round. Score: player: ${playerScore} computer: ${computerScore}`
    } else if (a==b){
        roundContainer.textContent = `Nobody wins the round. Score: player: ${playerScore} computer: ${computerScore}`
    } else {
        playerScore ++;
        roundContainer.textContent = `Player wins the round. Score: player: ${playerScore} computer: ${computerScore}`
    }
    } else {
        if(playerScore>computerScore){
            alert(`Game is over. The winner is player! Score: player: ${playerScore} computer: ${computerScore}`)
            computerScore=0;
            playerScore=0;
            roundContainer.textContent = `Winner is player. Score: player: ${playerScore} computer: ${computerScore}`
        }else if(playerScore<computerScore){
            alert(`Game is over. The winner is computer! Score: player: ${playerScore} computer: ${computerScore}`)
            computerScore=0;
            playerScore=0;
            roundContainer.textContent = `Winner is player. Score: player: ${playerScore} computer: ${computerScore}`
        }else{
            alert(`Game is over. No Winner. Score: player: ${playerScore} computer: ${computerScore}`)    
            computerScore=0;
            playerScore=0;
            roundContainer.textContent = `Winner is player. Score: player: ${playerScore} computer: ${computerScore}`
        }
    }
}


