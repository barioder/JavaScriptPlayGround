// setTimeout() function
// setTimeout() function executes a particular block of code once after a a specific 
// time has elapsed 

function call(){
    console.log('Calling Derrick')
}
// we call the settimeout function with a duration (4 seconds in this case)
setTimeout(call, 4000)

// if the function accepts a parameter we pass it through the settimeout()

function text(name){
    console.log(`Texting ${name}` )
}

setTimeout(text, 5000, 'Derrick')

// How to implement recursive setTimeout #this gives the same effect as setInterval()
setTimeout(function repeat() {
    console.log('Loging from recursive setTimeout')
    setTimeout(repeat, 500)
}, 500)

// setInterval() function 
// setInterval() function runs the same code block over and over at a regular interval unless stoped
// note setInterval() keeps on counting time as the code is being executed

// how to stop a setinterval function after a specific time 
// example below will log a message every 2 seconds and stop after 5 secs
function notforever(){
    console.log('I have to stop logging after 5 seconds')
}

let setIntervalid = setInterval(notforever, 2000)

// stops after 5 seconds
setTimeout(() => {clearInterval(setIntervalid); console.log('I have stopped logging here')}, 5000)

function shoutName(){
    console.log('Shouting Name Derrick')
}
// we call the setInterval () with the function duration (4 seconds in this case) as parameters
setInterval(shoutName, 2000)


// CallBacks 
// any function that is passed to another function as an argument is a callback function

function married(name){
    console.log(`${name} is a married person` )
}

function notSingle(married){
    const person = 'Steven'
    married(person)
}

notSingle(married)
