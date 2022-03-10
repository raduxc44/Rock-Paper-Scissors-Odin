// The initial variable declarations including the user's pre-picked input with the case sensitive test/
let computerChoice;
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

// The function will pick a round winner

function playRound(userChoice) {
    computerPlay();

    function playerWins() {
        if ((computerChoice === 'paper' && userChoice === 'scissors') || (computerChoice === 'scissors' && userChoice === 'rock') ||
            (computerChoice === 'rock' && userChoice === 'paper')) { return true };
    }
    playerWins()
    function tie() {
        if (computerChoice === userChoice) { return true };
    }
    tie()
    function computerWins() {
        if ((userChoice === 'rock' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'rock')) { return true };
    }
    computerWins();






    if (playerWins()) { console.log(`You won! The computer chose ${computerChoice}`) }
    else if (tie()) { console.log(`It's a tie! You both chose ${computerChoice}`) }
    else if (computerWins()) { console.log(`You lost. The computer chose ${computerChoice}`) }
    else { console.log('It seems like you did not enter a valid weapon.') }
}

// The function will pick a winner out of 5 rounds also counting ties and show each's score
const body = document.querySelector('body');
const div = document.createElement('div');
div.style = 'background-color : yellow; height: 100px; display : flex; align-items: center;';
body.appendChild(div);
const buttons = document.createElement('div');
div.appendChild(buttons);
buttons.style = 'display:flex; width: 100%; height : 25%; justify-content : space-around;';
const buttonOne = document.createElement('button');
const buttonTwo = document.createElement('button');
const buttonThree = document.createElement('button');
buttons.appendChild(buttonOne);
buttons.appendChild(buttonTwo);
buttons.appendChild(buttonThree);
buttonOne.classList.add('btn');
buttonOne.innerText = 'Rock';
buttonTwo.innerText = 'Paper';
buttonThree.innerText = 'Scissors';
buttonTwo.classList.add('btn');
buttonThree.classList.add('btn');
const btn = document.querySelector('btn');
buttonOne.addEventListener('click', () => { playRound('rock') });
buttonTwo.addEventListener('click', () => { playRound('paper') });
buttonThree.addEventListener('click', () => { playRound('scissors') })