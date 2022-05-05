let pick = ["rock","paper","scissors"]
let playerSelection = prompt("Enter your pick")
let computerSelection = pick[Math.round(Math.random()*2)]

function playRound(playerSelection, computerSelection) {
    let result = pick.indexOf(playerSelection) - pick.indexOf(computerSelection)
    if (result == -1 || result == 2) { return "CPU won"}
	else if (result == 0) { return "Tie!"}
    else { return "You win"} 
}
console.log("You picked: ",playerSelection)
console.log("CPU picked: ",computerSelection)
console.log(playRound(playerSelection, computerSelection))
