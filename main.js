console.log("Hi");

//Define variables plasyersChoice, computerChoice, playerScore, computerScore
let playersChoice;
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

    console.log(computerChoice) ;
}

getComputerChoice();

//Get users choice

//Decide the winner of the round and keep track of points

//Function that plays five rounds

