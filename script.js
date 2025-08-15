let humanScore = 0;
let computerScore = 0;

        for (let i = 0; i < 5; i++){
            function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]

    return computerChoice;
}
    playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    computerChoice = getComputerChoice();
    
    function playRound(playerChoice, computerChoice) {
        if (playerChoice ===computerChoice){
            console.log("It's a tie!");
            return 0;
        } else if (playerChoice === 'rock' && computerChoice === 'scissors'){
            console.log(`You won! ${playerChoice} beats ${computerChoice}`);
            humanScore++;
        } else if (playerChoice === 'rock' && computerChoice === 'paper') {
            console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
            computerScore++;
        } else if (playerChoice === 'paper' && computerChoice === 'rock')
            {
                console.log(`You won! ${playerChoice} beats ${computerChoice}`);
                humanScore++;
            } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
                console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
                computerScore++;
            } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
                console.log(`You won! ${playerChoice} beats ${computerChoice}`);
                humanScore++;
            } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
                console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
                computerScore++;
            }
        }
        
        playRound(playerChoice, computerChoice);

        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);

        }

        if (humanScore > computerScore){
            alert(`You won, the score is computer ${computerScore} and you ${humanScore}`);
        } else {
            alert(`You lost, the score is computer ${computerScore} and you ${humanScore}`);
        }