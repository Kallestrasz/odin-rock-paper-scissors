const pick = ["rock","paper","scissors"]
let result = 0

function playRound(playerSelection, computerSelection) {
    let res = pick.indexOf(playerSelection) - pick.indexOf(computerSelection)
    if (res == -1 || res == 2) {  
        result--
        return "CPU won"
    }
	else if (res == 0)  return "Tie!"
    else {
        result++
        return "You win"  
    }

}

function gameSequence(){
    let round = 1
    while(round <= 5){
        let playerSelection = prompt(`Round ${round}\nEnter your pick`).toLowerCase()
        let computerSelection = pick[Math.floor(Math.random()*3)] 
        let tie
        if(playerSelection){
            alert(`You picked: ${playerSelection}\nCPU picked: ${computerSelection}\n${tie =playRound(playerSelection,computerSelection)}`)
            if(tie != "Tie!") round++
            else alert("Retry")
        }
        else continue
    }
    if (result > 0) alert("You've won the game!") 
    else alert ("You've lost the game!")
}

gameSequence()
