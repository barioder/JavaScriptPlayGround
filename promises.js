// we create a promise with the new key word and a promise constractor function
// the promise constractor function accepts one function as its argument    
// the accepted function takes in 2 callback functions resolve and reject which 
// turn the state of the promise from pending to fulfilled or rejected respectively when called

//  a resolved promise
const promise = new Promise ((resolve, reject)=> {

    setTimeout(() => {
        // resolve turns promise state to fulfilled when called 
        resolve('Done with the task')
    },5000)

})
 
const whenResoved = (result) => {
    console.log('The promise was fulfilled and the result is below')
    console.log(`${result}`)
}

// promise constractor gives us access to 2 methods then and catch 
// if the promise status is fulfilled then is executed while catch is executed
// if the promise status is rejected 

promise.then(whenResoved)

// a rejected promise 

const promise2 = new Promise((resolve, reject) => {

    setTimeout(()=>{
        // reject returns the message passed into it 
        reject('Error')
    }, 6000)
})

const whenRejected = (error)=>{
    console.log('This is what is run when promise2 is rejected')
    console.log(`${error}`)

}

promise2.catch(whenRejected)

// promise static methods to read about 
// Promise.all() 
// if any of the promises rejects, promise.all() rejects with that error message 
const promise1 = Promise.resolve(30);
const promise22 = 42;
const promise3 = new Promise ((resolve, reject)=>{
    setTimeout(resolve, 200, 'YES');
});

// takes in an iterable of promises and returns a single promise that resolves to an array
Promise.all([promise1, promise22, promise3]).then((result)=>{
    console.log(result);
});


// Promise.settled()
// Promise.race()