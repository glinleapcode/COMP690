document.write(`<h2>Larger or Smaller App</h2>`)
let firstNumber = parseInt(prompt('Please enter the first integer: '));
let secondNumber = parseInt(prompt('Please enter the second integer: '));
if(firstNumber > secondNumber) {
    document.write(`The larger number is the first number: ${firstNumber}`);
} else if(secondNumber > firstNumber) {
    document.write(`The larger number is the second number: ${secondNumber}`);
} else if(secondNumber === firstNumber) {
    document.write(`The two numbers are equal!`);
} else {
    document.write("Please Enter Valid Integer numbers!");
}
