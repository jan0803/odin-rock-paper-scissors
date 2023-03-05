
function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function playRound(playerSelection, computerSelection) {

    let playerSel = playerSelection.toLowerCase();
    let computerSel = computerSelection.toLowerCase();

    if (playerSel == computerSel) {
        return "It's a draw!";
    }
    else if (
        ((playerSel == "rock") && (computerSel == "scissors")) ||
        ((playerSel == "paper") && (computerSel == "rock")) ||
        ((playerSel == "scissors") && (computerSel == "paper"))
        ){
        return "You win! " + playerSel + " beats " + computerSel;
    }
    else {
        return "You lose! " + computerSel + " beats " +playerSel;
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}

function getPlayerChoice() {
    return prompt();
}
