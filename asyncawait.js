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

    let takeoff = await promise ; //takeoff will wait 2 seconds untill promise resolves 
    // after promise resolves, then javascript continues to execute
    console.log(takeoff);
}

sprint()
