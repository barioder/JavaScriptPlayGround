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