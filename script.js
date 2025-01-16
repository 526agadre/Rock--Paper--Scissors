alert
let userName = prompt('What is your name')
let myStory = `Hello, ${userName}, Welcome to the Rock, Paper, Scissors!`
console.log(myStory)
document.getElementById('story').innerHTML = myStory; 
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();  
  
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log("Error! Invalid input. Please choose 'rock', 'paper', or 'scissors'.");
    }
  };
  
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);  
  
    
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  };
  
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
  
    
    if (userChoice === 'rock') {
      return computerChoice === 'paper' ? "Computer wins!" : "You win!";
    }
  
    if (userChoice === 'paper') {
      return computerChoice === 'scissors' ? "Computer wins!" : "You win!";
    }
  
    
    if (userChoice === 'scissors') {
      return computerChoice === 'rock' ? "Computer wins!" : "You win!";
    }
  };
  
  
  const playGame = (userInput) => {
   
    if (userInput.toLowerCase() === 'bomb') {
      console.log("You chose 'bomb'! You win by default.");
      return;
    }
  
    const userChoice = getUserChoice(userInput);
    if (userChoice === undefined) return;  
    
    const computerChoice = getComputerChoice();
  
    console.log(`User chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
  
    
    const result = determineWinner(userChoice, computerChoice);
    console.log(result);
  };
  
  
  playGame('rock');    
  playGame('paper'); 
  playGame('scissors'); 
  playGame('bomb');    
  playGame('invalid'); 
  
