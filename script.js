let choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let playerName = prompt("What is your name?")

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const resetBtn = document.querySelector("#reset-btn");

const resultsMsg = document.querySelector(".results-msg");
const winnerMsg = document.querySelector(".winner-msg");
const playerScoreKeep = document.querySelector(".player-score");
const computerScoreKeep = document.querySelector(".computer-score");

rockBtn.addEventListener("click", function () {
  playRound("ROCK", getComputerChoice());
});
paperBtn.addEventListener("click", function () {
  playRound("PAPER", getComputerChoice());
});
scissorsBtn.addEventListener("click", function () {
  playRound("SCISSORS", getComputerChoice());
});

resetBtn.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  resultsMsg.textContent = "";
  winnerMsg.textContent = "";
  winnerMsg.classList.remove("winner", "loser");
  playerScoreKeep.textContent = "";
  computerScoreKeep.textContent = "";
});

function playRound(player, computer) {
  if (player === computer) {
    resultsMsg.textContent = `You used ${player} to their ${computer}.`;
    winnerMsg.textContent = "Tie!";
    playerScoreKeep.textContent = `${playerName}: ${playerScore}`;
    computerScoreKeep.textContent = `Computer: ${computerScore}`;
  } else if (
    (player === "ROCK" && computer == "SCISSORS") ||
    (player === "PAPER" && computer == "ROCK") ||
    (player === "SCISSORS" && computer == "PAPER")
  ) {
    playerScore++;
    resultsMsg.textContent = `You used ${player} to their ${computer}.`;
    winnerMsg.textContent = "You win!";
    winnerMsg.classList.remove("winner", "loser");
    playerScoreKeep.textContent = `${playerName}: ${playerScore}`;
    computerScoreKeep.textContent = `Computer: ${computerScore}`;
  } else {
    computerScore++;
    resultsMsg.textContent = `You used ${player} to their ${computer}.`;
    winnerMsg.textContent = "You lose!";
    winnerMsg.classList.remove("winner", "loser");
    playerScoreKeep.textContent = `${playerName}: ${playerScore}`;
    computerScoreKeep.textContent = `Computer: ${computerScore}`;
  }
  checkWinner();
}

function checkWinner() {
  if (playerScore === 3) {
    winnerMsg.textContent = "You win the game!";
    winnerMsg.classList.add("winner");
    resultsMsg.textContent = `You won ${playerScore} rounds to their ${computerScore} rounds!`;
    playerScoreKeep.textContent = "";
    computerScoreKeep.textContent = "";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 3) {
    winnerMsg.textContent = "You lost the game!";
    winnerMsg.classList.add("loser");
    resultsMsg.textContent = `The Computer won ${computerScore} rounds to your ${playerScore} rounds!`;
    playerScoreKeep.textContent = "";
    computerScoreKeep.textContent = "";
    playerScore = 0;
    computerScore = 0;
  }
}
