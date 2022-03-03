// The initial variable declarations including the user's pre-picked input with the case sensitive test/
let computerChoice;
let userChoice = 'ROcK';
// The function picks a random number that will change the computerChoice variable's value
function computerPlay () {
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
// The function will make the user input case-insensitive

function userChoiceLow () {userChoice = userChoice.toLowerCase()}
userChoiceLow();

// The function will pick a round winner

function playRound () {
    computerPlay(); 
    if((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper')) {return `You lost! Computer chose ${computerChoice}.`}
    else if (computerChoice === userChoice) {return `It's a tie! Computer chose ${computerChoice}.`} else {return `You won! Computer chose ${computerChoice}.`}
}
// The function will pick a winner out of 5 rounds also counting ties
function game () {
    let userWinnerCount = 0;
    let computerWinnerCount = 0;
    let ties = 0;
    let rounds;
    for (let i = 0; i < 5; i++) {rounds = playRound();
        console.log(rounds);
    if(rounds === `You won! Computer chose ${computerChoice}.`) {userWinnerCount += 1}
    else if (rounds === `You lost! Computer chose ${computerChoice}.`) {computerWinnerCount += 1}
    else {ties += 1}
    }
    console.log(`${userWinnerCount} - You / ${computerWinnerCount} - The computer / ${ties} - Tie(s)`);
}
game()
