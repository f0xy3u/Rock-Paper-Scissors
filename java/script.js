function getComputerChoice(){
var random = Math.random()
var CompChoice = undefined
if (random < 0.33) {
    CompChoice = `rock`
} else if (random < 0.66) {
    CompChoice = `paper`
}else {
    CompChoice = `scissors`
}
return(CompChoice)
}

function getPlayerChoice() {
    PlayerChoice = undefined
    PlayerChoice = prompt(`What do you want to play? (Rock, Paper, Scissors)`)
    PlayerChoice = PlayerChoice.toLowerCase()
    return(PlayerChoice)
}

function oneRound() {
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()

    if (playerSelection == computerSelection) {
        result = `tie`
        console.log(`It's a tie.`)
    } else if (playerSelection == `rock` && computerSelection == `scissors`) {
        result = `win`
        console.log(`You win!`)
        console.log(`You played rock, computer played scissors.`)
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        result = `win`
        console.log(`You win!`)
        console.log(`You played scissors, computer played paper.`)
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        result = `win`
        console.log(`You win!`)
        console.log(`You played paper, computer played rock.`)
    } else if (playerSelection == `scissors` && computerSelection == `rock`) {
        result = `lose`
        console.log(`You lose!`)
        console.log(`You played scissors, computer played rock.`)
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
        result = `lose`
        console.log(`You lose!`)
        console.log(`You played paper, computer played scissors.`)
    } else if (playerSelection == `rock` && computerSelection == `paper`) {
        result = `lose`
        console.log(`You lose!`)
        console.log(`You played rock, computer played paper.`)
    } else {
        console.log(`Wrong input!`)
    }
    return(result)
}

function whoWon() {
    if (playerWin > computerWin) {
        console.log(` `)
        console.log(`You won!`)
        console.log(`You won`, playerWin, `times`)
        console.log(`Computer won`, computerWin, `times`)
    } else if (playerWin < computerWin) {
        console.log(` `)
        console.log(`Computer won!`)
        console.log(`You won`, playerWin, `times`)
        console.log(`Computer won`, computerWin, `times`)
    } else if (playerWin == computerWin) {
        console.log(` `)
        console.log(`It was a tie`)
    }
}

playing = true
let rounds = 0
let playerWin = 0; 
    computerWin = 0
while (playing == true) {
    rounds += 1
    
    if (rounds == 6) {
        whoWon()
        playing = false
    }

    result = oneRound()

    if (result == `win`) {
        playerWin +=  1
    } else if (result == `lose`) {
        computerWin += 1
    }


}