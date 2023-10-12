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
            result = x / y
            break
        default:
            result = 'Invalid operation or operation not supported'
    }
}

// COLLECT FIRST NUMBER FROM USER
let num1
while (true) {
    num1 = parseInt(prompt('Enter first number'))
    if (!isNaN(num1)) {
        break
    }
}


// COLLECT SECOND NUMBER FROM USER
let num2 
while (true) {
    num2 = parseInt(prompt('Enter second number'))
    if (!isNaN(num2)) {
        break
    }
}

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation
while (true) {
    operation = prompt('Enter operation to perform (+,-,*,/)').trim()
    if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
        break
    }
}
operation = operation.trim()
if (operation.length !== 1) {
    alert('Invalid operation or operation not supported')
}

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result = calculate(num1, num2, operation)
alert(result)
