const pick = ["rock","paper","scissors"]
let round = 1
let usersc = 0
let cpusc = 0


function playRound(playerSelection, computerSelection) {
    let res = playerSelection - pick.indexOf(computerSelection)
    if (res == -1 || res == 2) {  
        cpusc++
        return "CPU won!"
    }
	else if (res == 0)  return "Tie!"
    else {
        usersc++
        return "You win!"  
    }

}

const pChoice = document.querySelector('.pChoice')
const cChoice = document.querySelector('.cChoice')
const output = document.querySelector('.output')

const pScore = document.querySelector('.pScore')
const cScore = document.querySelector('.cScore')

const roundCount = document.querySelector('.roundCount')

function betterGameSequence(playerSelection){
    let computerSelection = pick[Math.floor(Math.random()*3)] 
    let tie
    if(round <= 5){
        
    pChoice.textContent = pick[playerSelection]
    cChoice.textContent = computerSelection
    output.textContent = tie = playRound(playerSelection,computerSelection)
    roundCount.textContent = round

    pScore.textContent = usersc
    cScore.textContent = cpusc

    if(tie != "Tie!") round++
    }
    else{
    if (usersc >= cpusc) alert("You've won the game!") 
    else alert("You've lost the game!")
    round = 1
    usersc = 0
    cpusc = 0
    }
} 

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
   betterGameSequence(button.id)
  });
});