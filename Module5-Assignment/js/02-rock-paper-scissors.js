
function welcome() {
    "Welcome to Rock Paper Scissor Game!"
}

function computerChoice() {
    const choices = ['rock', 'paper', 'scissor']
    index = Math.floor(Math.random() * 3)
    return choices[index]
}

function playerChoice() {
    let player
    while (true) {
        player = prompt("Please enter Rock, Paper or Scissor").toLowerCase()
        if (player === 'rock' || player === 'paper' || player === 'scissor')
            break
    }
    return player
}

function format(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1)

}


function checkWinner(player, computer) {
    if (player === 'scissor' && computer === 'paper' || player === 'rock' && computer === 'scissor' || player === 'paper' && computer === 'rock') {
        return `The player chose ${format(player)} and the computer chose ${format(computer)} </br>, since ${format(player)} beats ${format(computer)}, Player Wins!`
    } else {
        return `The player chose ${format(player)} and the computer chose ${format(computer)} </br>, since ${format(computer)} beats ${format(player)}, Computer Wins!`
    }
}

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

function init() {
    welcome()
    let playAgain = 'y'
    do {
        playRockPaperScissorGame()
        playAgain = prompt("Do you want to play again? (y/n)")
    } while (playAgain === 'y')
    alert("Thanks for playing the game!")
}

init()