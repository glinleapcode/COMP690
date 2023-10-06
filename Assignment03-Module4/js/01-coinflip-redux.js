let coinFlip
numOfFlips = parseInt(prompt("How many times would you like to flip the coin?"))
for(let i = 0; i < numOfFlips; i++) {
    // randomly generate either 0 or 1
    coinFlip = Math.round(Math.random()) 
    if(coinFlip === 0) {
        console.log("Heads");
    } else if(coinFlip === 1) {
        console.log("Tails");
    }
}