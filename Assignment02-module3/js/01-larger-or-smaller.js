document.write(`<h3>Larger or Smaller App</h3>`)
let firstNumber = parseInt(prompt('Please enter the first integer: '));
let secondNumber = parseInt(prompt('Please enter the second integer: '));
console.log(firstNumber)
console.log(secondNumber)
if(firstNumber > secondNumber) {
    document.write(`The larger number is the first number: ${firstNumber}`)
} else if(secondNumber > firstNumber) {
    document.write(`The larger number is the second number: ${secondNumber}`)
} else {
    document.write(`The two numbers are equal!`)

}
