// The initial variable declarations including the user's pre-picked input with the case sensitive test/
let computerChoice;
let userChoice = window.prompt('What is your pick?', '');
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
// The function will check the input and block the rest of the content until the input is valid


function userChoiceCheck () {
    while (userChoice.toLowerCase() !== 'rock' && userChoice.toLowerCase() !== 'paper' && userChoice.toLowerCase() !== 'scissors') {
        alert('You did not pick a valid weapon! Please pick between Rock, Paper and Scissors!')
        userChoice = window.prompt('What is your pick?', '');
        if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {break;}
}
    userChoice = userChoice.toLowerCase();
}
userChoiceCheck()
// The function will pick a round winner

function playRound () {
    computerPlay(); 
    if((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock')  || 
    (computerChoice === 'scissors' && userChoice === 'paper')) {return `You lost! Computer chose ${computerChoice}.`}
    else if (computerChoice === userChoice) {return `It's a tie! Computer chose ${computerChoice}.`} 
    else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || 
    (userChoice === 'scissors' && computerChoice === 'paper')) {return `You won! Computer chose ${computerChoice}.`}
    else {return 'It seems like you did not enter a valid weapon.'}
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
