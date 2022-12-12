// Nested functions 

let a = 15

function outer(){
    let b = 16

    function inner(){
        let c = 17
        console.log(a, b, c)
    }

    inner()
}

outer()

console.log('Closure in Javascript')


// Closure JavaScript
function outer1 (){
    let counter = 0
    function inner (){
        counter ++
        console.log(counter)
    }

    return inner
}

const fn = outer1()
fn()
fn() // note how this second function returns 2 instead of 1
fn()

// Function Currying 
console.log('Function Currying')

function sum(a,b,c){
    return a + b + c
}

// a function that takes in a function 
function curry(fx){
    return function(a){
        return function(b){
            return function(c){
                return fx(a, b, c)
            }
        }
    }
}

const currysum = curry(sum)

// method 1 to execute curried function 
console.log(currysum(4)(2)(4))
// method 2 to execute curried functions 
const add1 = currysum(4)
const add2 = add1(2)
const add3 = add2(4)

console.log(add3)

// String formatting in java
function myName (name){
    console.log(`Saying hi to ${name}`)
}

myName('stevo')

// "this" key word 

// how to invoke a function in javacript 
// Four ways to determine what is logged to the console by how a function is called

// 1. implicit binding
const person = {
    name: 'Magezi',
    sayName: function (){
        console.log(`Saying hi to ${this.name}`)
    }
}

person.sayName()

// 2. explicit binding 

const mark = {
    finalMark: '78',
}

function result(){
    console.log(`Your mark is ${this.finalMark}`)
}

result.call(mark)

// 3. new binding

function colour (choice){
    this.colourChoice = choice

}

const colour1 = new colour('Red')
const colour2 = new colour('Green')

console.log(colour1.colourChoice, colour2.colourChoice)



// default binding 

function bookName(){
    // notice how this.name will be evaluated to a default undefined 
    console.log(`The book title is ${this.name}`) 
}

bookName()