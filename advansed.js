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

//  Prototye concept in Javascript 

function join(value1, values2){
    this.valueone = value1
    this.valuetwo = values2
}

const value_1 = new join('ffff', 22222) // A function used with the new key word
const value_2 = new join('zzzz', 11111) // .. is called a constractor function

// this is where we use the prototype key word

join.prototype.joinedcomp = function(){
    return this.valueone+ ' ' + this.valuetwo
}
// prototye is used to share properties and methods across instances
console.log(value_1.joinedcomp())
console.log(value_2.joinedcomp())

// inheritence 
// prototypal inheritance
// a richman function that inherites properties and methods from human 
function human(fname, lname){
    this.firstname = fname
    this.lastname = lname

}

human.prototype.getfullNam = function(){
    return this.firstname+ " "+ this.lastname
}

// rich man function inherites from the human function 
function richMan(fname, lname){
    human.call(this, fname, lname)
    this.isRichHuman = true
}

richMan.prototype.hasWife = function (){
    console.log('Has a wife')
}

//objects key word delegets to another object on failed look ups
// richMan inherites the getfullname fuction
richMan.prototype =  Object.create(human.prototype)

const don = new richMan('Magezi', 'David')

console.log(don.getfullNam())

// to access the isRichHuman Value
console.log(don.isRichHuman)


// before clean up note the returned object
console.log(don)

// clean up in inheritance 
richMan.prototype.constructor = richMan

//  after clean up note the returned object
console.log(don)

//  class key word in javascript 

// we can re write the prototyple inheritence code with classes 
class Human {
    constructor(fname1, lname1){
        this.firstname = fname1
        this.lastname = lname1
    }

    getfullNam (){
        return this.firstname + ' ' +this.lastname
    }

}

// creating instances of human 

const classhuman1 = new Human('Bariyo', 'Derrick')
console.log(classhuman1.getfullNam())