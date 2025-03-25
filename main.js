console.log("Hi");

//Define variables plasyersChoice, computerChoice, playerScore, computerScore
let computerChoice;
let playerChoice;
let playerScore=0;
let computerScore=0;

//Get computers choice

function getComputerChoice () {
    if (Math.floor(Math.random() * 3)===0){
        computerChoice="rock";
    } else if (Math.floor(Math.random() * 3)===1){
        computerChoice="paper";
    } else {
        computerChoice="scissor";
    }

    return computerChoice;
}

//Get users choice
function getPlayerChoice (){
playerChoice = prompt("Please choose one: rock, paper, scissor", "Harry Potter");
return playerChoice;
}

//Play a round and decide the winner of the round and increase/decrease corresponding score

function playRound(a, b){

    if(a=="rock"&b=="scissor"){
        computerScore ++;
        return `Winner is computer. Score: player: ${playerScore} computer: ${computerScore}`
    } else if (a=="paper"&b=="rock"){
        computerScore ++;
        return `Winner is computer. Score: player: ${playerScore} computer: ${computerScore}`
    } else if (a=="scissor"&b=="paper"){
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
        let a = getComputerChoice();
        let b = getPlayerChoice();
    console.log(playRound(a,b));
    if(playerScore === 3 || computerScore === 3){
        break;
    }
    }
    if(playerScore>computerScore){
    console.log(`Game is over. The winner is player! Score: player: ${playerScore} computer: ${computerScore}`)
    }else{
    console.log(`Game is over. Winner is computer. Score: player: ${playerScore} computer: ${computerScore}`)    
    }
}

playFiveGames();
