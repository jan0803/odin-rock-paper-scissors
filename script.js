
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
        return "You win!";
    }
    else {
        return "You lose!";
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
