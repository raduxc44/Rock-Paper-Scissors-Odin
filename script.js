// The initial variable declarations including the user's pre-picked input/
let computerChoice;
let userChoice = 'scissors';
let result;
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
computerPlay();
// The function will change the result's value according to the game's winner
function userPlay (userChoice) {return userChoice.toLowerCase();}
function determineWinner () {
    if((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper')) {result = 'You lost!'}
    else if (computerChoice === userChoice) {result = 'It\'s a tie!'} else {result = 'You won!'}
    return result;
}
determineWinner();
console.log(`The computer chose ${computerChoice}.`);
console.log(`You chose ${userChoice}.`);
console.log(result);
