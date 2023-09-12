  function getComputerChoice() {
    let randomNumberValue = (Math.floor(Math.random() * 3) + 1)
    if (randomNumberValue === 1){
      return "Rock";
  } else if (randomNumberValue === 2){
      return "Paper";
  } else if (randomNumberValue === 3){
      return "Scissors";
  } 
}

let computerSelection = getComputerChoice();
let playerScore = 0;
let compScore = 0;


function playRound(playerSelection, computerSelection){
    let result = "";
      if (playerSelection == 'rock' && computerSelection == 'Scissors'){
          result = "Win";
          playerScore++;
      } else if (playerSelection == 'rock' && computerSelection == 'Paper'){
          result = "Lose";
          compScore++;
      } else if (playerSelection == 'rock' && computerSelection == 'Rock'){
          result = "Draw";
      } else if (playerSelection == 'scissors' && computerSelection == 'Rock'){
          result = "Lose";
          compScore++;
      } else if (playerSelection == 'scissors' && computerSelection == 'Paper'){
          result = "Win";
          playerScore++;
      } else if (playerSelection == 'scissors' && computerSelection == 'Scissors'){
          result = "Draw";
      } else if (playerSelection == 'paper' && computerSelection == 'Rock'){
          result = "Win";
          playerScore++;
      } else if (playerSelection == 'paper' && computerSelection == 'Scissors'){
          result = "Lose";
          compScore++;
      } else if (playerSelection == 'paper' && computerSelection == 'Paper'){
          result = "Draw";
      }


      const container = document.querySelector('#container');
      
      const content = document.createElement('div');
      content.classList.add('content');
      content.textContent = result;

      container.appendChild(content)

  }

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function (){
        playRound(button.id, computerSelection)})});





//if (playerScore > compScore) {
//    console.log("Player Wins")
//} else if (playerScore < compScore) {
//    console.log("Comp Wins")
//} else if (playerScore = compScore) {
//    console.log("It's a tie!")/
//}