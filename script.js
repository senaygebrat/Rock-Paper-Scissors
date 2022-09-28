//create variables for user's choice
var userChoice = "";

//create variables for computer's choice
var computerChoice = "";

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
function generateComputerChoice(){
    
}
checkUserChoice()

//check that choice is valid (r, p, s)
//if valid, computer responds with its choice
//display who won, and store win/loss/tie value
//offer to play again

