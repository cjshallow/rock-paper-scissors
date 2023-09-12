
let playerScore = 0;
let compScore = 0;

function playRound(playerSelection){
    
    let result = "";
    const choices = ["Rock", "Paper", "Scissors"]
    const random = Math.floor(Math.random() * choices.length);


      if ((playerSelection == 'Rock' && choices[random] == 'Scissors') || 
         (playerSelection == 'Scissors' && choices[random] == 'Paper') ||
         (playerSelection == 'Paper' && choices[random] == 'Rock')) {
            playerScore++;
            result = "Score! " + playerSelection + " beats " + choices[random] + ".";
         
       } else if (
          (playerSelection == 'Rock' && choices[random] == 'Paper') ||
          (playerSelection == 'Paper' && choices[random] == 'Scissors') ||
          (playerSelection == 'Scissors' && choices[random] == 'Rock')) {
            compScore++;
            result = "Miss! " + choices[random] + " beats " + playerSelection + ".";

       } else {
            result = "Tie! Try again.";
          } 
       
       if (playerScore === 5 || compScore === 5){
          document.getElementById("Rock").disabled=true;
          document.getElementById("Paper").disabled=true;
          document.getElementById("Scissors").disabled=true;
       }

       if (playerScore === 5){
          endGame = "You win the game!";
       } else if (compScore === 5){
          endGame = "You lose to the computer!";
       } else {
          endGame = "";
       }
         
        document.getElementById('result').innerHTML = result;
        document.getElementById('score').innerHTML = "Player Score: " + playerScore + " Computer Score: " + compScore;
        document.getElementById('endGame').innerHTML = endGame;

  }

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function (){
        playRound(button.id)})});
