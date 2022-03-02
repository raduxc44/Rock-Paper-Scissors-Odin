/* the program gets a user input for his weapon choice
the computer selects his random choice
we have a function compare both choices and determine a winner
If the computer picks rock and user picks scissors, computer wins, else computer loses
If the computer picks paper and the user picks scissors, c wins else c loses
If the computer picks scissors and u picks paper, c wins else c loses
If they are the same, it's a tie
*/
let computerChoice;
let userChoice = 'scissors'
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
function userPlay (userChoice) {return userChoice.toLowerCase();}
function determineWinner (result) {
    if((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper')) {result = 'You lost!'}
    else if (computerChoice === userChoice) {result = 'It\'s a tie!'} else {result = 'You won!'}
    return result;
}
console.log(determineWinner());
console.log(computerChoice);
console.log(userChoice);