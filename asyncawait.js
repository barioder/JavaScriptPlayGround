// anysnc await 

// the async key word is used to declare anysnc functions
// async functions always return  a promise 

async function sayHello (){
    return 'How are you doing'
}

// notice it returns a promise which gets printed
console.log(sayHello())


async function sayhi(){
    return Promise.resolve('Saying Hi')
}

sayhi().then((value)=>{
    console.log(value)
})

// async key word combined with await key word 

// await key word makes javascript wait untill the promise returns a result 
// await key word only works inside async functions 


async function sprint(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('Run'), 2000)
    });
    // The await key word suspends the sprint function execution untill the promise is settled 
    let takeoff = await promise ; //takeoff will wait 2 seconds untill promise resolves 
    // after promise resolves, then javascript continues to execute
    console.log(takeoff);
}

sprint()

// Sequential Execution 

// best used when a function is dependant on the other 

function saysBig(){
    return new Promise(resolve =>{
        setTimeout(function (){
            resolve('Big')
        }, 2000)

    })
}

function saysMove(){
    return new Promise( resolve => {
        setTimeout(function (){
            resolve('Move')
        }, 1000)
    })
}

async function sequentialExe(){
    const big = await saysBig()
    console.log(big) // logs to the console after 2 
    // saysMove() execution depends on when saysBig() finishes execution 
    const move = await saysMove()
    console.log(move) // waits for 2 seconds after mad then it executes as well making it 3 seconds
}

sequentialExe()

