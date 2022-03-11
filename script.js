// The initial variable declarations
let computerChoice;
let userWinnerCount = 0;
let computerWinnerCount = 0;
let tiesCount = 0;
let roundResult = '';
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

// The function will play a round and determine the winner for it

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

    if (playerWins()) { roundResult = `You won! The computer chose ${computerChoice}. You chose ${userChoice}. <br>` }
    else if (tie()) { roundResult = `It's a tie! You both chose ${computerChoice}. <br>` }
    else if (computerWins()) { roundResult = `You lost. The computer chose ${computerChoice}. You chose ${userChoice}. <br>` }
    else { roundResult = 'It seems like you did not enter a valid weapon. <br>' }
}

// Gibberish but works, will reformat

const body = document.querySelector('body');
body.style = '<link rel="stylesheet" href="../Rock-Paper-Scissors-Odin/style.css">'
const buttonContainer = document.createElement('div');
buttonContainer.style = 'background-color : yellow; height: 1080px; display : flex; flex-direction: column; align-items: center; justify-content: space-around';
body.appendChild(buttonContainer);
const buttons = document.createElement('div');
buttonContainer.appendChild(buttons);
buttons.style = 'display:flex; width: 100%; height : 25%; justify-content : space-around;';
const buttonOne = document.createElement('button');
const buttonTwo = document.createElement('button');
const buttonThree = document.createElement('button');
buttons.appendChild(buttonOne);
buttons.appendChild(buttonTwo);
buttons.appendChild(buttonThree);
buttonOne.innerHTML = '<img src = "../Rock-Paper-Scissors-Odin/source/8-2-rock-png-picture-thumb.png" alt="ROCK">';
buttonTwo.innerHTML = '<img src = "../Rock-Paper-Scissors-Odin/source/rsz_pngtree-a-blank-sheet-of-writing-image_1297633-removebg-preview.png" alt="PAPER">';
buttonThree.innerHTML = '<img src="../Rock-Paper-Scissors-Odin/source/rsz_1scissor-symbol-iluustration-on-transparent-background-png-removebg-preview.png" alt="SCISSORS">'
const resultsContainer = document.createElement('div');
resultsContainer.classList.add('results');
buttonOne.addEventListener('click', () => { playRound('rock'); document.getElementsByClassName('results')[0].innerHTML += roundResult; });
buttonTwo.addEventListener('click', () => { playRound('paper'); document.getElementsByClassName('results')[0].innerHTML += roundResult; });
buttonThree.addEventListener('click', () => { playRound('scissors'); document.getElementsByClassName('results')[0].innerHTML += roundResult; });
const buttonsArr = document.querySelectorAll('button');
for (let i = 0; i < buttonsArr.length; i++) {
    buttonsArr[i].style = 'background-color:red; width: 250px; padding: 0;'
}


buttonContainer.appendChild(resultsContainer);
resultsContainer.style = 'background-color:black; color:white; display:flex; flex-direction:column; width:75%; height:500px;';

