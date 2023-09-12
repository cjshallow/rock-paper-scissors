
let playerScore = 0;
let compScore = 0;

function playRound(playerSelection){
    
    let result = "";
    const choices = ["Rock", "Paper", "Scissors"]
    const random = Math.floor(Math.random() * choices.length);


      if (playerSelection == 'rock' && choices[random] == 'Scissors'){
          result = "Win";
          playerScore++;
      } else if (playerSelection == 'rock' && choices[random] == 'Paper'){
          result = "Lose";
          compScore++;
      } else if (playerSelection == 'rock' && choices[random] == 'Rock'){
          result = "Draw";
      } else if (playerSelection == 'scissors' && choices[random] == 'Rock'){
          result = "Lose";
          compScore++;
      } else if (playerSelection == 'scissors' && choices[random] == 'Paper'){
          result = "Win";
          playerScore++;
      } else if (playerSelection == 'scissors' && choices[random] == 'Scissors'){
          result = "Draw";
      } else if (playerSelection == 'paper' && choices[random] == 'Rock'){
          result = "Win";
          playerScore++;
      } else if (playerSelection == 'paper' && choices[random] == 'Scissors'){
          result = "Lose";
          compScore++;
      } else if (playerSelection == 'paper' && choices[random] == 'Paper'){
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
        playRound(button.id)})});





//if (playerScore > compScore) {
//    console.log("Player Wins")
//} else if (playerScore < compScore) {
//    console.log("Comp Wins")
//} else if (playerScore = compScore) {
//    console.log("It's a tie!")/
//}