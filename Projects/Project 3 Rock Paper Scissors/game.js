function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection.toLowerCase()) {
        return "<span class='tie'>It's a tie!</span>";
    } else if (
        (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
        return "<span class='win'>You win! " + playerSelection + " beats " + computerSelection + ".</span>";
    } else {
        return "<span class='lose'>You lose! " + computerSelection + " beats " + playerSelection + ".</span>";
    }
}

// Function to play the game
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let outcome = '';

    for (let i = 0; i < 3; i++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        outcome += "<p>Round " + (i+1) + ": " + roundResult + "</p>";

        if (roundResult.includes('win')) {
            playerScore++;
        } else if (roundResult.includes('lose')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        outcome += "<p class='win'>You win the game with a score of " + playerScore + " to " + computerScore + "!</p>";
    } else if (playerScore < computerScore) {
        outcome += "<p class='lose'>You lose the game with a score of " + playerScore + " to " + computerScore + ".</p>";
    } else {
        outcome += "<p class='tie'>The game ends in a tie with a score of " + playerScore + " to " + computerScore + ".</p>";
    }

    document.getElementById('outcome').innerHTML = outcome;
}

// Start the game
playGame();