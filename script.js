// The initial variable declarations including the user's pre-picked input with the case sensitive test/
let computerChoice;
let userChoice;
let userWinnerCount = 0;
let computerWinnerCount = 0;
let tiesCount = 0;
let rounds;
// The function picks a random number that will change the computerChoice variable's value
function computerPlay() {
    computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }
}
// The function will check the input and block the rest of the content until the input is valid


function userChoiceCheck() {
    userChoice = userChoice.toLowerCase();
    while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        alert('You did not pick a valid weapon! Please pick between Rock, Paper and Scissors!')
        userChoice = window.prompt('What is your pick?', '');
    }
}

function playerWins() {
    if ((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') ||
        (computerChoice === 'scissors' && userChoice === 'paper')) { return true };
}
function tie() {
    if (computerChoice === userChoice) { return true };
}
function computerWins() {
    if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) { return true };
}
// The function will pick a round winner

function playRound() {
    computerPlay();
    userChoice = window.prompt('What is your pick?', '');
    userChoiceCheck()
    if (playerWins()) { userWinnerCount++; console.log(`You won! The computer chose ${computerChoice}`) }
    else if (tie()) { tiesCount++; console.log(`It's a tie! You both chose ${computerChoice}`) }
    else if (computerWins()) { computerWinnerCount++; console.log(`You lost. The computer chose ${computerChoice}`) }
    else { console.log('It seems like you did not enter a valid weapon.') }
}

// The function will pick a winner out of 5 rounds also counting ties and show each's score
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(`${userWinnerCount} - You / ${computerWinnerCount} - The computer / ${tiesCount} - Tie(s)`);
}
game()
