alert
let userName = prompt('What is your name')
let myStory = `Hello, ${userName}, Welcome to the Rock, Paper, Scissors!`
console.log(myStory)
document.getElementById('story').innerHTML = myStory; 
