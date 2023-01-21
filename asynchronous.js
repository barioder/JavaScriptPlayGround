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

// setInterval() function which runs the same code block over and over at a regular interval
// note setInterval() keeps on counting time as the code is being executed

function shoutName(){
    console.log('Shouting Name Derrick')
}
// we call the setInterval () with the function duration (4 seconds in this case) as parameters
setInterval(shoutName, 2000)