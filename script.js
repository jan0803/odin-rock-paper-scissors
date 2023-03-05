let playerScoreValue = 0;
let computerScoreValue = 0;

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

// 0 = Rock
// 1 = Paper
// 2 = Scissors

function playRound(playerSel, computerSel) {

    if (playerSel === computerSel) {
        return "It's a draw!";
    }
    else if (
        ((playerSel === 0) && (computerSel === 2)) ||
        ((playerSel === 1) && (computerSel === 0)) ||
        ((playerSel === 2) && (computerSel === 1))
        ){
        playerScoreValue++;
        document.getElementById("player-score").innerHTML = playerScoreValue;
        return "You win!";
    }
    else {
        computerScoreValue++;
        document.getElementById("computer-score").innerHTML = computerScoreValue;
        return "You lose!";
    }

}


function getPlayerChoice() {
    return prompt();
}

function game() {
    playerScoreValue = 0;
    computerScoreValue = 0;

    document.getElementById("rock").onclick = playRound(0,getComputerChoice());
    document.getElementById("paper").onclick = playRound(1,getComputerChoice());
    document.getElementById("scissors").onclick = playRound(2,getComputerChoice());

}
