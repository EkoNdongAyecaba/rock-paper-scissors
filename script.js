let humanScore = 0;
let computerScore = 0;
let counter = 0;

const mainBody = document.querySelector("body");
mainBody.style.display = "flex";
mainBody.style.flexDirection = "column";
mainBody.style.gap = "10px";
mainBody.style.textAlign = "center";

const scoreBoard = document.createElement("div");
const body = document.createElement("div");
mainBody.appendChild(body);

const buttons = document.createElement("span");
buttons.style.display = "flex";
buttons.style.justifyContent = "space-evenly";
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

const restart = document.createElement("div");
const btnRestart = document.createElement("button");
restart.appendChild(btnRestart);
btnRestart.textContent = "Restart game";
btnRestart.addEventListener("click", function () {
  location.reload();
});

body.append(scoreBoard, buttons);

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

buttons.append(btnRock, btnPaper, btnScissors);

btnRock.addEventListener("click", function () {
  return playRound("rock");
});
btnPaper.addEventListener("click", function () {
  return playRound("paper");
});
btnScissors.addEventListener("click", () => playRound("scissors"));

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  return computerChoice;
}

const result = document.createElement("div");

function playRound(playerChoice) {
  if (counter >= 5) {
    return;
  }
  const computerChoice = getComputerChoice();
  scoreBoard.textContent = `Human score: ${humanScore}  Computer score: ${computerScore}`;
  if (playerChoice === computerChoice) {
    result.textContent = "It's a tie";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    result.textContent = `You won! ${playerChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    result.textContent = `You lost! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result.textContent = `You won! ${playerChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    result.textContent = `You lost! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    result.textContent = `You won! ${playerChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    result.textContent = `You lost! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }

  counter++;
  console.log(counter);

  if (counter === 5) {
    if (humanScore > computerScore) {
      result.textContent += `\nGame over! You won: ${humanScore} - ${computerScore}`;
    } else if (computerScore > humanScore) {
      result.textContent += `\nGame over! You lost: ${humanScore} - ${computerScore}`;
    } else {
      result.textContent += `\nGame over! It's a tie: ${humanScore} - ${computerScore}`;
    }
  }
  scoreBoard.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;
}

mainBody.append(scoreBoard, result, restart);
