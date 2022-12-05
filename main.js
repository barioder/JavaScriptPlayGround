// printing statements in JS
console.log('Hello World from main.js')

// variables (let is used for variable that change while const is for those that dont)

let num = 100
console.log(num)

num = 55
console.log(num)


const year = 2022

console.log(year)

// Object  Data types
const person ={
    'name': 'Namu Derrick',
    'age': 32
}

console.log(person)
console.log(person.name)

console.log(person.age)


//  array objects 

const oddNum = [1, 3, 5, 7]

console.log(oddNum[0], oddNum[3])

// operators 
console.log('-------Operators-----')
let y = 10
let x = 9

console.log(y + x)
console.log(x % y)
console.log(++y)
console.log(--x)

// logical AND 
const isValid = y > 5 && x < 5
console.log(isValid)

// logical OR

const validResult = y > 5 || x < 5
console.log(validResult)

const value = true

console.log(!value)

// working with strings 

console.log('Joining ' +'more than ' +'one string')

// ternary operator 

const iseven = 10 % 2 === 0 ? true : false
console.log(iseven)

const iseven2 = 10 % 2 === 0 ? 'yes is even' : 'is not even'
console.log(iseven2)


// type conversions 
// implicint conversion (Javascript automatically converts the type)

// Explicit conversion (manually convert the type)

// type conversions 
console.log(2 + '5')
console.log(true + 3)

console.log(Number('25')) //this returns a number instead of a string 
console.log(Number(true))
console.log(Number(false))

console.log(parseInt('0.55'), '------') // returns int

console.log(parseFloat('5.55')) // returns a float value 

console.log(String(500)) // returns a string 
console.log((200).toString())// returns a string 

//  Equality 
console.log('-------EQUALITY------')
const val1 = 'try'
const val2 = 'try'

console.log(val1 == val2)
console.log(val1 === val2)


const val3 = 20
const val4 = '20'
console.log (val3 == val4)
console.log (val3 === val4) // returns false they all need to be of the same type 

// conditional statements






