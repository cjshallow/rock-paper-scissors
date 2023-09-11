let randomNumberValue = (Math.floor(Math.random() * 3) + 1)

  function getComputerChoice() {
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
      if (playerSelection == 'rock' && computerSelection == 'Scissors'){
          result = "Win";
          //playerScore++;
          console.log(result);
      } else if (playerSelection == 'rock' && computerSelection == 'Paper'){
          result = "Lose";
          //compScore++;
          console.log(result);
      } else if (playerSelection == 'rock' && computerSelection == 'Rock'){
          result = "Draw";
          console.log(result);
      } else if (playerSelection == 'scissors' && computerSelection == 'Rock'){
          result = "Lose";
          compScore++;
          //return result;
      } else if (playerSelection == 'scissors' && computerSelection == 'Paper'){
          result = "Win";
          playerScore++;
          //return result;
      } else if (playerSelection == 'scissors' && computerSelection == 'Scissors'){
          result = "Draw";
          //return result;
      } else if (playerSelection == 'paper' && computerSelection == 'Rock'){
          result = "Win";
          playerScore++;
          //return result;
      } else if (playerSelection == 'paper' && computerSelection == 'Scissors'){
          result = "Lose";
          compScore++;
          //return result;
      } else if (playerSelection == 'paper' && computerSelection == 'Paper'){
          result = "Draw";
          //return result;
      }
  }



//  function game(){
//    playRound(playerSelectionOne, computerSelection);
//    return result;
//  }

  const rock = document.querySelector('#rock');
  rock.addEventListener('click', playRound('rock', computerSelection));
  
  //const paper = document.querySelector('#paper');
  //paper.addEventListener('click')
   

  //const scissors = document.querySelector('#scissors');
  //scissors.addEventListener('click', () => {alert("working")});


// console.log(playRound(playerSelection, computerSelection));


//let playerSelectionOne = prompt("Your move").toLowerCase();
//let playerSelectionTwo = prompt("Your move").toLowerCase();
//let playerSelectionThree = prompt("Your move").toLowerCase();
//let playerSelectionFour = prompt("Your move").toLowerCase();
//let playerSelectionFive = prompt("Your move").toLowerCase();
  

//if (playerScore > compScore) {
//    console.log("Player Wins")
//} else if (playerScore < compScore) {
//    console.log("Comp Wins")
//} else if (playerScore = compScore) {
//    console.log("It's a tie!")
//}