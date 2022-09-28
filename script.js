//create variables for user's choice
var userChoice = "";

//create variables for computer's choice
var computerChoice = "";
var choiceNumber = "";
//variables for total stats wins losses ties
var win = 0;
var loss = 0;
var ties = 0;

//initiate prompt asking for user choice, store into user choice variable
function checkUserChoice(){
    userChoice = prompt("Please enter your choice from r, p, s");
  if (userChoice == "r" || userChoice== "p" || userChoice == "s"){
  }
  else {
    alert("Choice was invalid!");
    checkUserChoice();
  }
}

//if valid, computer responds with its choice
function generateComputerChoice(){
    var choiceNumber = Math.floor(Math.random()*3);
    console.log(choiceNumber);
    if(choiceNumber == 0){
        computerChoice = "r";
    }
    if(choiceNumber == 1){
        computerChoice = "p";
    }
    if(choiceNumber == 2){
        computerChoice = "s";
    }
    console.log(computerChoice);
}

function determineWinner(){
    if(userChoice == "r" && computerChoice == "r"){
        alert("Game was a tie! Computer choice was " + computerChoice);
        (ties++);
    }
    if(userChoice == "r" && computerChoice == "p"){
        alert("You lose! Computer choice was " + computerChoice);
        (loss++);
    }
    if(userChoice == "r" && computerChoice == "s"){
        alert("You win! Computer choice was " + computerChoice);
        (win++);
    }
    if(userChoice == "p" && computerChoice == "r"){
        alert("You win! Computer choice was " + computerChoice);
        (win++);
    }
    if(userChoice == "p" && computerChoice == "p"){
            alert("Game was a tie! Computer choice was " + computerChoice);
            (ties++);
    }
    if(userChoice == "p" && computerChoice == "s"){
        alert("You lose! Computer choice was " + computerChoice);
        (loss++);
    }
    if(userChoice == "s" && computerChoice == "r"){
        alert("You lose! Computer choice was " + computerChoice);
        (loss++);
    }
    if(userChoice == "s" && computerChoice == "p"){
        alert("You win! Computer choice was " + computerChoice);
        (win++);
    }
    if(userChoice == "s" && computerChoice == "s"){
        alert("Game was a tie! Computer choice was " + computerChoice);
        (ties++);
    }

}

function displayStats(){
    alert("Wins: " + win + " Losses : " + loss + " Ties: " + ties)
}


function playGame(){
    checkUserChoice()
    generateComputerChoice()
    determineWinner()
    displayStats()
    playGame()
}

playGame()



//display who won, and store win/loss/tie value
//offer to play again

