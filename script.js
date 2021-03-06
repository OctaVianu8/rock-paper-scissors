function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    return (play == 0) ? 'rock' :
        (play == 1) ? 'paper' : 'scissors';
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1,);
}

let playerScore = 0, computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let playerWins = 0, computerWins = 0;
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') computerWins = 1;
        else if (computerSelection == 'scissors') playerWins = 1;
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') playerWins = 1;
        if (computerSelection == 'scissors') computerWins = 1;
    }
    else {
        if (computerSelection == 'paper') playerWins = 1;
        if (computerSelection == 'rock') computerWins = 1;
    }
    let ps = capitalize(playerSelection);
    let cs = capitalize(computerSelection);
    if (!playerWins && !computerWins) { 
        //playerScore+=0.5;
        //computerScore+=0.5;
        return 'draw';
    }
    else if (playerWins) { 
        playerScore++;
        return `win`; 
    }
    else { 
        computerScore++;
        return `lose`; 
    }
}

function convertToRoundMessage(string,ps,cs)
{
    if(string == 'draw') return 'No one wins! There is a draw.'; 
    else if (string == 'lose') return `You lose! ${cs} beats ${ps}.`; 
    else return `You win! ${ps} beats ${cs}.`; 
}

const winnerText = document.querySelector(".winner-text");

function checkForWinner()
{
    if(playerScore >=5)
    {
        winnerText.textContent = 'The winner is: YOU!'
    }
    else if(computerScore >=5) 
    {
        winnerText.textContent = 'The winner is: Computer.'
    }
}

const buttons = document.querySelectorAll(".button-row button");
const resultText = document.querySelector(".result");
const computerScoreText = document.querySelector(".computer-score");
const playerScoreText = document.querySelector(".player-score");

buttons.forEach(button => button.addEventListener('click', function (e) {
    let cs = computerPlay(), ps = button.id;
    let result = playRound(ps, cs);
    resultText.textContent = convertToRoundMessage(result,ps,cs);
    playerScoreText.textContent = playerScore.toString();
    computerScoreText.textContent = computerScore.toString();
    colorButtons(result,button);
    button.classList.add()
    checkForWinner();
    //console.log(playRound(button.id,computerPlay()));
}))

function colorButtons(result,button)
{
    buttons.forEach(button => {
        button.classList.remove('win');
        button.classList.remove('lose');
        button.classList.remove('draw');
    })
    button.classList.add(result);
}