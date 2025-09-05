let humanScore = 0;
let computerScore = 0;

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

const mainBody = document.querySelector("body");
const body = document.createElement("div");
mainBody.appendChild(body);
mainBody.style.display = "flex";
mainBody.style.flexDirection = "column";
mainBody.style.gap = "5px";
mainBody.style.textAlign = "center";

const buttons = document.createElement("span");
body.appendChild(buttons);
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

buttons.style.display = "flex";
buttons.style.justifyContent = "space-evenly";

buttons.appendChild(btnRock);
buttons.appendChild(btnPaper);
buttons.appendChild(btnScissors);

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

const result = document.createElement("div");

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
    result.textContent = "It's a tie";
    return 0;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log(`You won! ${playerChoice} beats ${computerChoice}`);
    result.textContent = `You won! ${playerChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
    result.textContent = `You lost! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log(`You won! ${playerChoice} beats ${computerChoice}`);
    result.textContent = `You won! ${playerChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
    result.textContent = `You lost! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log(`You won! ${playerChoice} beats ${computerChoice}`);
    result.textContent = `You won! ${playerChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
    result.textContent = `You lost! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }
}

mainBody.appendChild(result);
console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);

if (humanScore > computerScore) {
  console.log(
    `You won, the score is computer ${computerScore} and you ${humanScore}`
  );
} else if (computerScore > humanScore) {
  console.log(
    `You lost, the score is computer ${computerScore} and you ${humanScore}`
  );
} else {
  console.log("It's a tie");
}
