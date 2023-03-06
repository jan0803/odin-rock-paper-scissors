let playerScoreValue = 0;
let computerScoreValue = 0;

//Assign buttons of the index.html to variables
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

let startButton = document.getElementById("start");
let restartButton = document.getElementById("restart");

// 0 = Rock
// 1 = Paper
// 2 = Scissors

//start game if page was reloaded
window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        game();
    }
}

//Add eventListener for the start and restart button
startButton.addEventListener('click', function () {game()}, {once: true})
restartButton.addEventListener('click', function () {restartGame()})

//game function to start the game and to add eventListener to the other buttons
function game() {
    playerScoreValue = 0;
    computerScoreValue = 0;

    document.getElementById("display-text").innerHTML = "Game has started!";

    rockButton.addEventListener('click', function () {playRound(0,getComputerChoice())});
    paperButton.addEventListener('click', function () {playRound(1,getComputerChoice())});
    scissorsButton.addEventListener('click', function () {playRound(2,getComputerChoice())});
}

//restartGame function to reset the score and start the game
function restartGame() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}


//playRound function to play a round and check woh has won and changing the score
function playRound(playerSel, computerSel) {

    if (playerSel === computerSel) {
        document.getElementById("display-text").innerHTML = "It's a draw!";
    }
    else if (
        ((playerSel === 0) && (computerSel === 2)) ||
        ((playerSel === 1) && (computerSel === 0)) ||
        ((playerSel === 2) && (computerSel === 1))
        ){
        playerScoreValue++;
        document.getElementById("player-score").innerHTML = playerScoreValue;
        document.getElementById("display-text").innerHTML = 
            `Player won this round with ${getNameOfValue(playerSel)}! The Computer chose ${getNameOfValue(computerSel)}`;
    }
    else {
        computerScoreValue++;
        document.getElementById("computer-score").innerHTML = computerScoreValue;
        document.getElementById("display-text").innerHTML =
            `Computer won this round with ${getNameOfValue(computerSel)}! The Player chose ${getNameOfValue(playerSel)}`;
    }

}

//basic function to convert the int value to string
function getNameOfValue(number) {
    if (number === 0) {
        return "Rock";
    }
    else if (number === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

//to get a random choice for the computer, gives one of those values: 0,1,2
function getComputerChoice() {
    let computerChoiceNumber = Math.floor(Math.random()*3);
    return computerChoiceNumber;
}
