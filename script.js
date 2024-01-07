/* Scoreboard */
let playerScore = 0;
let computerScore = 0;

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
  if (playerSelection === computerSelection) {
    return `Tie! ${playerSelection} and ${computerSelection} are friends so they do nothing. Try again!`;
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection == "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    return `You win! Your ${playerSelection} beats their ${computerSelection}!`;
  } else if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection == "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
    return `You lose! Thier ${computerSelection} beats your ${playerSelection}!`;
  } else {
    i--;
    return "Please enter a valid input! (ROCK, PAPER or SCISSORS!)";
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    playRound();
    const playerSelection = prompt(
      "Let's play a game! Choose between Rock, Paper or Scissors:"
    ).toUpperCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("-------------------------------");
  }
  if (playerScore > computerScore) {
    alert(
      `You win! You won ${playerScore} rounds to their ${computerScore} rounds. The computer says good game and thinks you did well! Refresh via F5 to try again.`
    );
  } else if (computerScore > playerScore) {
    alert(
      `Aw shucks, you lose! The computer won ${computerScore} rounds to your ${playerScore} rounds. The computer says good game and hopes you enjoyed your game together! Refresh via F5 to try again.`
    );
  } else {
    alert(
      `It's a tie! You both end the game with ${playerScore} rounds won together. The computer says good game and enjoyed your time together!`
    );
  }
}
game();
