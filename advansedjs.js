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
