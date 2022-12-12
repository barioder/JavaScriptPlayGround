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

