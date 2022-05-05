let result,tie;
const pick = ["rock","paper","scissors"]

function playRound(playerSelection, computerSelection) {
    let result = pick.indexOf(playerSelection) - pick.indexOf(computerSelection)
    if (result == -1 || result == 2) {  result--; return "CPU won";}
	else if (result == 0) {  tie = true; return "Tie!";}
    else { result++; return "You win"; } 
}

function gameSequence(){
    let playerSelection;
    let computerSelection;
    let round = 1;
    result = 0;
    tie = false;
    while(round <= 5){
        playerSelection = prompt(`Round ${round}\nEnter your pick`)
        computerSelection = pick[Math.round(Math.random()*2)] 
        if(pick.includes(playerSelection)){
            alert(`You picked: ${playerSelection}\nCPU picked: ${computerSelection}\n${playRound(playerSelection,computerSelection)}`)
            if(tie == false){ round++ }
            else{ alert("Retry"); tie = false }
        }
        else { continue; }
    }
    if (result > 0) { alert("You've won the game!") }
    else { alert("You've lost the game!")}
}

gameSequence();
