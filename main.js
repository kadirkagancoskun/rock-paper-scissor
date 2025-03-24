console.log("Hi");

//Define variables plasyersChoice, computerChoice, playerScore, computerScore
let playerChoice;
let computerChoice
let playerScore;
let computerScore;

//Get computers choice

function getComputerChoice () {
    if (Math.floor(Math.random() * 3)===0){
        computerChoice="rock";
    } else if (Math.floor(Math.random() * 3)===1){
        computerChoice="paper";
    } else {
        computerChoice="scissor";
    }

    console.log("Computers choice for this round: " + computerChoice) ;
}


//Get users choice
function getPlayerChoice (){
playerChoice = prompt("Please choose one: rock, paper, scissor", "Harry Potter");
console.log("Players choice for this round: " + playerChoice);
}

getComputerChoice();
getPlayerChoice();

//Decide the winner of the round and keep track of points

//Function that plays five rounds

