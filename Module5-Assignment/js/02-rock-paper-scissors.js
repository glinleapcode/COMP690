
function welcome() {
    "Welcome to Rock Paper Scissor Game!"
}

function computerChoice() {
    const choices = ['rock', 'paper', 'scissor']
    index = Math.floor(Math.random() * 3)
    return choices[index]
}

function checkWinner(player, computer) {
    if (player === computer) {
        return "tie"
    } else {
        if (player === 'scissor' && computer === 'paper' || player === 'rock' && computer === 'scissor' || player === 'paper' && computer === 'rock') {
            return "Player wins"
        } else {
            return "Computer Wins"
        }
    }


}

function playRockPaperScissor() {
    let player
    while (true) {
        player = prompt("Please enter Rock, Paper or Scissor").toLowerCase()
        if (player === 'rock' || player === 'paper' || player === 'scissor')
            break
    }
    computer = computerChoice()
    
    
    

}


function init() {
    welcome()
    let playAgain = 'y'
    do {
        playRockPaperScissor()
        playAgain = prompt("Do you want to play again? (y/n)")
    } while (playAgain === 'y')
    alert("Thanks for playing the game!")

}

init()