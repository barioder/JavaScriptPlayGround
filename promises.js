// we create a promise with the new key word and a promise constractor function
// the promise constractor function accepts one function as its argument    
// the accepted function takes in 2 callback functions resolve and reject which 
// turn the state of the promise from pending to fulfilled or rejected respectively when called

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