//getting input from user
const getUserInput = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || 'paper' || 'scissors'){
        return userInput;
    }else{
        console.log('Invalid input!');
    }
}

//getting computer input
const getComputerInput = () =>{
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

//Determining the winner

const checkWinner = (userChoice, compChoice ) =>{
    if (userChoice === compChoice){
        return "It's a Tie!";
    }
    else if (userChoice === 'rock'){
        if(compChoice === 'paper'){
            return 'Computer Won!' // rock vs paper
        }else{
            return 'User Won!' // rock vs scissors
        }
    } 
    else if (userChoice === 'paper'){
        if (compChoice === 'rock'){
            return 'User Won!';
        }else{
            return 'Computer won!';
        }
    } else {
        // default userChoice is scissors
        if (compChoice === 'paper'){
            return 'User won!';
        }else{
            return 'Computer won!';
        }
    }
};

const playGame = () =>{
    console.log(`Player chose ${getUserInput('rock')}`);
    console.log(`Computer chose ${getComputerInput()}`);
    console.log(`Result ${checkWinner(getUserInput('rock'),getComputerInput())}`);
};

playGame();