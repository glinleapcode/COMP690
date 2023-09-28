
let coinFlip = Math.round(Math.random() * 10) // generate a random number between [0, 10]
let choice = prompt('Heads or Tails? Please enter your choice(h/t): ')
if(coinFlip < 5) { // 0 <= coinFlip < 5  
    result = 'head'
} else { // 5 <= coinFlip <= 10
    result = 'tail'
}

if(result === 'head') { // coin flipped head
    if(choice === 'h') {
        alert("The flip was heads and you chose heads...you win!")
    } else if(choice === 't') {
        alert("The flip was heads but you chose tails...you lose!")
    } else {
        alert("Please enter either h or t only")
    }
} else { // coin flipped tails
    if(choice === 'h') {
        alert("The flip was tails but you chose heads...you lose!")
    } else if(choice === 't') {
        alert("The flip was tails and you chose tails...you win!")
    } else {
        alert("Please enter either h or t only")
    }
}
