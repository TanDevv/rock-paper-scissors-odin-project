function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() === computerSelection) {
    return `It's a tie! ${playerSelection.toUpperCase()} and ${computerSelection} are friends! Try again!`;
  }
  if (
    (playerSelection.toUpperCase() === "ROCK" &&
      computerSelection === "SCISSORS") ||
    (playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection === "PAPER") ||
    (playerSelection.toUpperCase() == "PAPER" && computerSelection === "ROCK")
  ) {
    return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection}! Good job!`;
  }
  if (
    (computerSelection === "ROCK" &&
      playerSelection.toUpperCase() === "SCISSORS") ||
    (computerSelection === "SCISSORS" &&
      playerSelection.toUpperCase() === "PAPER") ||
    (computerSelection == "PAPER" && playerSelection.toUpperCase() === "ROCK")
  ) {
    return `You lose! ${computerSelection} beats ${playerSelection.toUpperCase()}! Unlucky!`;
  }
}