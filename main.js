const choices = ["rock","paper", "scissors"];
const winners = [];

function resetGame(){
    //reset game
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").style.display = "none";
}
function startGame(){
    // play game
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) =>
    img.addEventListener(('click'),() => {
        if(img.id){
            playRound(img.id)
        }
    })
    );
}

function playRound(playerChoice){
    let wins = checkWins();
    if(wins >= 5){
        return
    }
     const computerChoice = computerSelect();
     const winner = checkWinner(playerChoice, computerChoice);
     
     winners.push(winner);
     tallyWins();
     displayRound(playerChoice, computerChoice, winner);
     wins = checkWins();
     if(wins == 5){
        //show end result
        displayEnd();
     }
     
}
function displayEnd(){
    let pWins = winners.filter((item) => item == "Player").length;

    if(pWins == 5){
        document.querySelector(".winner").textContent = 'You won 5 times Awesome!';
    }else{
        document.querySelector(".winner").textContent = 'Sorry the computer won 5 times';
    }
    document.querySelector(".reset").style.display = "flex";
}
function displayRound(playerChoice, computerChoice, winner){
    document.querySelector(".playerChoice").textContent =  `You chose: ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector(".computerChoice").textContent =  `The Computer chose: ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    document.querySelector(".winner").textContent =  `Round Winner: ${winner}`;
    displayRoundWinner(winner);
}
function displayRoundWinner(winner){
    if (winner == "Player") {
        document.querySelector(".winner").textContent = "You won the Round!";
      } else if (winner == "Computer") {
        document.querySelector(".winner").textContent =
          "The Computer won the Round";
      } else {
        document.querySelector(".winner").textContent = "The Round was a tie";
      }
}
function tallyWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let tieWins = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
    document.querySelector(".computerScore").textContent = `Score: ${computerWins}`;
    document.querySelector(".ties").textContent = `Score: ${tieWins}`;
}

function computerSelect (){
    // get random input for comp
    const choice  = choices[Math.floor(Math.random()*choices.length)];
    document.querySelector(`.${choice}`).classList.add("active");

    setTimeout(() => {
      document.querySelector(`.${choice}`).classList.remove("active");
    }, 700);
    
    return choice;
}

function checkWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins, computerWins);
}



function checkWinner(choiceP, choiceC){
    if(choiceP == choiceC){
        return 'Tie';
    }else if(
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")
        ){
            return "Player";
        }else{
            return "Computer";
        }
}

function setWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let tieWins = winners.filter((item) => item == "Tie").length;
    
}

startGame();



 
