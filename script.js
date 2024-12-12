

function getComputerChoice(){
    let computerChoice
    let computerChoiceNumber = Math.random()
    if(computerChoiceNumber <= 0.3 && computerChoiceNumber >0){
        computerChoice = "rock"
    } else if(computerChoiceNumber <= 0.6 && computerChoiceNumber >0.3) {
        computerChoice = "paper"
    } else if(computerChoiceNumber <= 1 && computerChoiceNumber >0.6){
        computerChoice = "scissors"
    }
    return computerChoice
}

function getHumanChoice(){
    let userInput = prompt("Enter you choice rock, paper, scissor \n Note: answer is case sensitive", "Now your opponent will also decide")
    return userInput
}



function playGame(){
    function playRound(humanChoice,computerChoice){
        let pick = humanChoice.toLowerCase()
        console.log(pick)
        console.log(computerChoice)
        if(pick === computerChoice){
            console.log("It's a tie")
        } else if(pick === "paper"){
            console.log(`Your Choice ${pick}`)
            console.log(`Computer Choice ${computerChoice}`)
            if(computerChoice === "scissors"){
                console.log("Computer Wins")
                computerScore++
            } else {
                console.log("You Win")
                humanScore++
            }
        } else if(pick === "rock"){
            console.log(`Your Choice ${pick}`)
            console.log(`Computer Choice ${computerChoice}`)
            if(computerChoice === "paper"){
                console.log("Computer Wins")
                computerScore++
            } else {
                console.log("You Win")
                humanScore++
        }
        } else if(pick === "scissors"){
            console.log(`Your Choice ${pick}`)
            console.log(`Computer Choice ${computerChoice}`)
            if(computerChoice === "rock"){
                console.log("Computer Wins")
                computerScore++
            } else {
                console.log("You Win")
                humanScore++
        } 
        }
        console.log(`Scores: \n Your Score: ${humanScore} \n Computer Score: ${computerScore}`)
    }
    let humanScore = 0
    let computerScore = 0
    
    for(let i = 0; i < 5 ; i++){
        playRound(getHumanChoice(),getComputerChoice())
    }
    console.log(humanScore > computerScore ? "You Win" : "Computer Wins")
}

playGame()