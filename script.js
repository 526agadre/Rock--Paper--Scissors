alert
let userName = prompt('What is your name?');
console.log(userName)
let myStory = `Hello, ${userName}, welcome to the Rock, Paper, Scissors game!`;
console.log(myStory)
document.getElementById('story').innerHTML = myStory; 
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error: Invalid choice');
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'It\'s a Tie!';
    }
    if (userChoice === 'rock') {
        return computerChoice === 'scissors' ? 'You Win!' : 'Computer Wins!';
    }
    if (userChoice === 'paper') {
        return computerChoice === 'rock' ? 'You Win!' : 'Computer Wins!';
    }
    if (userChoice === 'scissors') {
        return computerChoice === 'paper' ? 'You Win!' : 'Computer Wins!';
    }
};
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

const updateScoreboard = () => {
    document.getElementById('rounds-played').textContent = roundsPlayed;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
};

const resetGame = () => {
    roundsPlayed = 0;
    playerScore = 0;
    computerScore = 0;

    document.getElementById('player-box').innerHTML = '';
    document.getElementById('computer-box').innerHTML = '';
    document.getElementById('result').textContent = 'Result: ';
    updateScoreboard();
};

const playGame = (userInput) => {
    if (roundsPlayed >= 5) {
        document.getElementById('result').textContent = 'Game over! Click Reset to play again.';
        return;
    }

    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    document.getElementById('player-box').innerHTML = `<img src="${userChoice}.jpg" alt="${userChoice}">`;
    document.getElementById('computer-box').innerHTML = `<img src="${computerChoice}.jpg" alt="${computerChoice}">`;
    document.getElementById('result').textContent = `Result: ${result}`;

    roundsPlayed++;
    if (result === 'You Win!') {
        playerScore++;
    } else if (result === 'Computer Wins!') {
        computerScore++;
    }

    updateScoreboard();
    if (roundsPlayed === 5) {
        if (playerScore > computerScore) {
            document.getElementById('result').textContent = 'Congratulations! You win the game!';
        } else if (playerScore < computerScore) {
            document.getElementById('result').textContent = 'Sorry, you lost the game.';
        } else {
            document.getElementById('result').textContent = 'It\'s a tie!';
        }
    }
};

