
function welcome() {
    "Welcome to Rock Paper Scissor Game!"
}

// generate a random number between 0 and 2 and use array index to get the computer choice
function computerChoice() {
    const choices = ['rock', 'paper', 'scissor']
    index = Math.floor(Math.random() * 3)
    return choices[index]
}

function playerChoice() {
    let player
    // ask the user for input until they enter a valid choice (rock, paper, or scissor)
    while (true) {
        player = prompt("Please enter Rock, Paper or Scissor").toLowerCase()
        if (player === 'rock' || player === 'paper' || player === 'scissor')
            break
    }
    return player
}

// capitalize the first letter of the choice, format for printing
function format(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1)
}

// check the winner of the game
function checkWinner(player, computer) {
    if (player === 'scissor' && computer === 'paper' || player === 'rock' && computer === 'scissor' || player === 'paper' && computer === 'rock') {
        return `The player chose ${format(player)} and the computer chose ${format(computer)}, since ${format(player)} beats ${format(computer)}, Player Wins!`
    } else {
        return `The player chose ${format(player)} and the computer chose ${format(computer)}, since ${format(computer)} beats ${format(player)}, Computer Wins!`
    }
}

// main game function
function playRockPaperScissorGame() {
    let computer = computerChoice()
    let player = playerChoice()
    
    while (computer === player) {
        alert(`Both the player and the computer have selected ${player}, resulting in a tie. Please make another choice`)
        computer = computerChoice()
        player = playerChoice()
    }
    let result = checkWinner(player, computer)
    alert(result)
}

// start the game
function init() {
    welcome()
    let playAgain = 'y'
    do {
        playRockPaperScissorGame()
        playAgain = prompt("Do you want to play again? (y/n)")
    } while (playAgain === 'y')
    alert("Thanks for playing the game!")
}

init() // starting point of the game