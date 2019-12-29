const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const message = document.querySelector('#message');

playerScore.textContent = 0;
computerScore.textContent = 0;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playRound(button.id, computerPlay());
  });
});

// Determines the computers selection by picking a random number 1 - 3
function computerPlay() {
  let rand = Math.floor(Math.random() * 3) + 1;
  let choice = "";

  switch(rand) {
    case 1:
      choice = "Rock";
      break;
    case 2:
      choice = "Paper";
      break;
    case 3:
      choice = "Scissors";
      break;
  }

  return choice;
}

// Compares the player's choice to the computer's and increases the score
function playRound(playerSelection, computerSelection) {
  const winningMessage = `Player wins! ${playerSelection} beats ${computerSelection}`;
  const losingMessage = `Computer wins! ${computerSelection} beats ${playerSelection}`;
  const tieMessage = `${playerSelection} vs ${computerSelection}. It's a tie!`

  switch(playerSelection) {
    case "Rock":
      switch(computerSelection) {
        case "Rock":
          message.textContent = tieMessage;
          break;
        case "Paper":
          computerScore.textContent++;
          message.textContent = losingMessage;
          break;
        case "Scissors":
          playerScore.textContent++;
          message.textContent = winningMessage;
          break;
      }
      break;
    case "Paper":
      switch(computerSelection) {
        case "Rock":
          playerScore.textContent++;
          message.textContent = winningMessage;
          break;
        case "Paper":
          message.textContent = tieMessage;
          break;
        case "Scissors":
          computerScore.textContent++;
          message.textContent = losingMessage;
          break;
      }
      break;
    case "Scissors":
      switch(computerSelection) {
        case "Rock":
          computerScore.textContent++;
          message.textContent = losingMessage;
          break;
        case "Paper":
          playerScore.textContent++;
          message.textContent = winningMessage;
          break;
        case "Scissors":
          message.textContent = tieMessage;
          break;
      }
  }    
}

/*
// Uses a loop to play a chosen number of rounds and outputs the winner
function game(numRounds) {
  let i = 0;
  let playerSelection = "" 
  let computerSelection = "";

  for(i = 0; i < numRounds; i++) {
    // Doesn't check for invalid input but I don't feel like coding that in
    // I'm the only one playing this anyways
    playerSelection = prompt("Rock, Paper, or Scissors?");
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Current Score: " + playerScore + " : " + computerScore);
  }

  if(playerScore > computerScore) {
    alert("Player Wins!");
  } else if(playerScore < computerScore) {
    alert("Computer Wins!");
  } else {
    alert("It's a tie!");
  }
}
*/