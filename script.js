let playerScoreValue = 0;
let computerScoreValue = 0;
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

function getComputerChoice() {
    let computerChoiceNumber = Math.floor(Math.random()*3);
    console.log(`Computer makes this choice: ${computerChoiceNumber}`);
    return computerChoiceNumber;
}

// 0 = Rock
// 1 = Paper
// 2 = Scissors

function playRound(playerSel, computerSel) {

    if (playerSel === computerSel) {
        console.log("It's a draw!");
    }
    else if (
        ((playerSel === 0) && (computerSel === 2)) ||
        ((playerSel === 1) && (computerSel === 0)) ||
        ((playerSel === 2) && (computerSel === 1))
        ){
        playerScoreValue++;
        document.getElementById("player-score").innerHTML = playerScoreValue;
        console.log("Player scored");
    }
    else {
        computerScoreValue++;
        document.getElementById("computer-score").innerHTML = computerScoreValue;
        console.log("Computer scored");
    }

}


function game() {
    playerScoreValue = 0;
    computerScoreValue = 0;

    console.log("Initilization of the game");

    rockButton.addEventListener('click', function () {playRound(0,getComputerChoice())});


}

