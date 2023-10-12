//STEP 1
function halfNumber(num) {
    return num / 2
}
let a = 5
let half = halfNumber(a)
console.log(`Half of ${a} is ${half}.`)

//STEP 2

function squareNumber(num) {
    return num * num
} 

let b = 3
let square = squareNumber(b)
console.log(`The result of squaring the number ${b} is ${square}.`)

//STEP 3

function percentOf(x, y) {
    if (y == 0) {
        return
    }
    let percent = parseFloat(x / y)
    return parseFloat(4 / 10)
}

let x = 3
let y = 10
let percent = percentOf(x, y)
console.log(`${x} is ${percent}% of ${y}`)

//STEP 4

//STEP 5