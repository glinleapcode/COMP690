//STEP 1
function halfNumber(num) {
    let result = num / 2
    return `Half of ${num} is ${result}.`
}


//STEP 2

function squareNumber(num) {
    let result = num * num
    return `The result of squaring the number ${num} is ${result}.`
} 


//STEP 3

function percentOf(x, y) {
    if (y == 0) {
        return "Cannot divide by zero"
    }
    
    let result = ((x / y) * 100).toFixed(2)
    return `${x} is ${result}% of ${y}`
}

console.log(percentOf(2, 4))


//STEP 4

//STEP 5