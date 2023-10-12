// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    let result
    switch (operation) {
        case '+':
            result = x + y
            break
        case '-':
            result = x - y
            break
        case '*':
            result = x * y
            break
        case '/':
            result = (x / y).toFixed(2)
            break
        default:
            result = 'Invalid operation or operation not supported'
    }
    return result
}

// COLLECT FIRST NUMBER FROM USER
let num1
// handle invalid number
while (true) {
    num1 = parseInt(prompt('Enter first number:'))
    if (!isNaN(num1)) { // when num1 is valid number break the loop
        break
    } else {
        console.log('Invalid number, please re-enter')
    }
}


// COLLECT SECOND NUMBER FROM USER
let num2 
// handle invalid number
while (true) {
    num2 = parseInt(prompt('Enter second number:'))
    if (!isNaN(num2)) {
        break
    } else {
        console.log('Invalid number, please re-enter')
    }
}

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation
// handle invalid operation
while (true) {
    operation = prompt('Enter operation to perform (+,-,*,/)').trim()
    if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
        break
    } else {
        console.log('Invalid operation, please re-enter')
    }
}

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result = calculate(num1, num2, operation)
alert(`${num1} ${operation} ${num2} = ${result}`)
