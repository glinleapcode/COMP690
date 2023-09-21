//STEP 1
// let someMonth
// function theMonth(){} 
// let currentMonth
// let summerMonth 
// let myLibraryFunction 

//STEP 2
//   99.9    // numeric literal
//   "hello" // string literal
//   true    // boolean literal
//   null    // null literal
 
//STEP 3
// Math.pow(2, 10) + 35 % 3 
// 2**3 + 15 * 3 + 18 / 6 - 5 % 2

//STEP 4
// let firstName  //Camel Case
// let strFirstName // Hungarian Notation

// let lastName
// let strLastName

// let address
// let strAddress

// let city
// let strCity

// let state
// let strState

// let zipCode
// let intZipCode

// let yourAge
// let intYourAge

// let referralSource
// let strReferralSource

// let mayWeContactYou 
// let blnMayWeContactYou

//STEP 5
//Method 1
// let strCity
// let intZipCode
// let mayWeContactYou
// strCity = "San Diego"
// intZipCode = 92126
// mayWeContactYou = true

//Method 2
// let strCity = "San Diego"
// let intZipCode = 92126
// let mayWeContactYou = true

//Method 3
// let strCity = "San Diego", intZipCode = 92126, mayWeContactYou = true

//STEP 6
// let a = 2 + '3' 
// console.log(a) // '23'
// console.log(typeof a) //string

//STEP 7
// let b = true + 'hi'
// console.log(b) //'truehi'
// console.log(typeof b) //string
// let c = 5 + true
// console.log(c) // 6
// console.log(typeof c) // number

//STEP 8
//It is not valid, add a backslash '\' before the quote in I'm will make it valid, see the modified string below
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)

//STEP 9
// let d = null
// console.log(d)
// let e
// console.log(e)

//STEP 10
// console.log(typeof "hello")
// console.log(typeof 100)
// console.log(typeof true)
// console.log(typeof window)
// console.log(typeof undefined)

//STEP 11
// alert("Hello " + "Gu Lin"+ ", welcome to the JavaScript class!")

//STEP 12
// let name = "Gu Lin"
// alert(`Hello ${name}, welcome to the JavaScript class!`)

//STEP 13
// let myName = "Gu Lin"
// let course = "JavaScript"
// alert(`Hello ${myName}, welcome to the ${course} class!`)

//STEP 14
// let myName = "Gu Lin"
// let course = "JavaScript"
// alert(`Hello ${myName}. \nWelcome to the ${course} class!`)


//STEP 15
// let userName = prompt("Please Enter Your Name: ")
// alert(`Hello ${userName}. \nWelcome to the JavaScript class!`)

//STEP 16
// let userName = prompt("Please Enter Your Name: ")
// let course = prompt("Please Enter the Class Name: ")
// alert(`Hello ${userName}. \nWelcome to the ${course} class!`)

//STEP 17
// let x = 10
// let y = 20
// console.log(x + y)

//STEP 18
// let x = 20
// x += 20
// console.log(x)

//STEP 19
// let x = 20
// x *= 5
// console.log(x)

//STEP 20
// let x = 20 % 3
// x /= 1
// console.log(x)

//STEP 21
// document.write(`<h1>Wine Buying Validation App</h1>`)
// let age = parseInt(prompt("Please Enter Your Age"))
// let hasID = confirm("Do you have an ID?")
// let isLegitBuyingWine = age >= 25 && hasID
// if (isLegitBuyingWine) {
//     document.write(`<h2 id="eligible">You are eligible to buy wine!</h2>`)
//     console.log("You're eligible to buy wine!")
// } else {
//     document.write(`<h2 id="notEligible">You are not eligible to buy wine!</h2>`)
//     console.log("You are not eligible to buy wine!")

// }

// if (isLegitBuyingWine) {
//     let eligibleMessage = document.getElementById("eligible")
//     eligibleMessage.style.color = "green"
// } else {
//     let notEligibleMessage = document.getElementById("notEligible")
//     notEligibleMessage.style.color = "red"
// }

//STEP 22
// document.write(`<h1>Pinic App</h1>`)
// let temperature = prompt("What\'s the temperature today? ")
// let isRaining = confirm("Is it raining today? ")
// const isNotForPicnic = temperature < 60 || isRaining
// if(isNotForPicnic) {
//     document.write(`<h2>Weather is not suitable for a picnic.</h2>`)
//     console.log("Weather is not suitable for a picnic.")
// } else {
//     document.write(`<h2>Weather is suitable for a picnic.</h2>`)
//     console.log("Weather is suitable for a picnic.")
// }


