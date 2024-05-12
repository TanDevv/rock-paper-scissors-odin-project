let choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let winners = [];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice() {
  let input = prompt("Rock, Paper or Scissors?");
  input = input.toUpperCase();
  return input;
}

function checkWinner(player, computer) {
  if (player === computer) {
    return "Tie!";
  } else if (
    (player === "ROCK" && computer == "SCISSORS") ||
    (player === "PAPER" && computer == "ROCK") ||
    (player === "SCISSORS" && computer == "PAPER")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

function playRound(round) {
  const playerSelection = getUserChoice();
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWinner();
}

function logRound(getUserChoice, getComputerChoice, winner, round) {
  console.log("Current Round:", round);
  console.log("Player Chose:", getUserChoice);
  console.log("Computer Chose:", getComputerChoice);
  console.log(winner);
  console.log("-------------------------------");
}

function logWinner() {
  if (playerScore > computerScore) {
    console.log("You win the game!");
    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);
  } else if (computerScore > playerScore) {
    console.log("You lost the game!");
    console.log("Computer Score:", computerScore);
    console.log("Player Score:", playerScore);
  } else {
    console.log("It is a tie game!");
    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);
  }
}
game();
