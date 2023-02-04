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

// concurrent execution 

async function concurrentExe(){
    const big1 = saysBig()
    const move1 = saysMove()
    // with this way saysBig and saysMove execute concurrently
    // saysMove will not wait for saysBig to finish for it to execute but rather executed in the 
    // backgroung and wait only to log the output after saysBig logs its result
    // This will take 2 seconds to execute instead of 3
    console.log(await big1, 'from concurrent Exe')
    console.log(await move1, 'from concurrent Exe')
}

concurrentExe()


// Parallel Execution 
// here individual functions are resolved with out having to wait for other functions to 
// be resolved 

function resolveHot(){
    return new Promise (resolve => {
        setTimeout(function (){ 
            resolve('Hot')
        }, 2000)
    })
}

function resolveTea(){
    return new Promise (resolve => { 
        setTimeout(function (){
            resolve('Tea')
        },
        1000)
    })
}


function parallelExe(){
    // Function that executes fasted is what is logged to the console with out waiting for the other
    Promise.all([
        (async ()=> console.log(await resolveHot()))(),
        (async ()=> console.log(await resolveTea()))(),
    ])
}


parallelExe()