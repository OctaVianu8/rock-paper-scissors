function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    return (play == 0) ? 'rock' :
        (play == 1) ? 'paper' : 'scissors';
}

function capitalize(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1,);
}

function playRound(playerSelection, computerSelection)
{
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    if(playerSelection == 'rock')
    {
        if(computerSelection == 'paper') computerWins = 1;
        else if(computerSelection == 'scissors') playerWins = 1;
    }
    else if(playerSelection == 'paper')
    {
        if(computerSelection == 'rock') playerWins=1;
        if(computerSelection == 'scissors') computerWins=1;
    }
    else 
    {
        if(computerSelection == 'paper') playerWins=1;
        if(computerSelection == 'rock') computerWins=1 ;
    }
    let ps = capitalize(playerSelection);
    let cs = capitalize(computerSelection);
    if(!playerWins && !computerWins) return 'No one wins! There is a draw.';
    else if(playerWins) return `You win! ${ps} beats ${cs}.`;
    else return `You lose! ${cs} beats ${ps}.`;
}