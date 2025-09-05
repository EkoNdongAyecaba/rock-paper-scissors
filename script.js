let humanScore = 0;
let computerScore = 0;

console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);

if (humanScore > computerScore) {
  alert(
    `You won, the score is computer ${computerScore} and you ${humanScore}`
  );
} else {
  alert(
    `You lost, the score is computer ${computerScore} and you ${humanScore}`
  );
}

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

const body = document.querySelector("body");
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

body.style.display = "flex";
body.style.justifyContent = "space-evenly";

body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  return computerChoice;
}

btnRock.addEventListener("click", function () {
  return playRound("rock");
});
btnPaper.addEventListener("click", function () {
  return playRound("paper");
});
btnScissors.addEventListener("click", () => playRound("scissors"));

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
    return 0;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log(`You won! ${playerChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
    computerScore++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log(`You won! ${playerChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
    computerScore++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log(`You won! ${playerChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
    computerScore++;
  }
}
