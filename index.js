console.log('Rock, Paper or Scissors Game');
//convert user input in toLowerCase
const getUserChoice = userInput =>{ userInput = userInput.toLowerCase()
  if( userInput==='rock' || userInput==='paper' ||userInput==='scissors'){
    return userInput;
  }else{
    console.log('Error!');
  }
};

const getComputerChoice = () => {
  const randomNumber= Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
} 


const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return "Game is tie!";
  } else if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The Computer won!';
      }else{
        return 'User won!';
      }
  } else if ( userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The Computer won!';
    }else{
      return 'User won!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The Computer won!';
    } else {
      return 'User won!';
    }
  } else if ( userChoice === 'bomb'){
    return 'You won! The bomb beats everything.';
  }
 }

//console.log(getComputerChoice());
 //console.log(determineWinner('paper', 'scissors'));
 //console.log(determineWinner('paper', 'paper'));
 //console.log(determineWinner('paper', 'rock'));

const playgame = ()=>{
 const userChoice = getUserChoice('rock');
 const computerChoice = getComputerChoice();
 console.log('You threw: '+ userChoice);
 console.log('The Computer threw: '+computerChoice);
 console.log(determineWinner(userChoice, computerChoice));
 };
//Function Calling
 playgame();
