// lexical scoping and closures

let fname = 'gopal'
let lname = 'dolu'
function sayName(){
    let fname = 'N D'
    console.log('inside sayName in the function SayName',fname)
    function innerOne(){
        console.log('inner is ',fname, lname)
    }
    innerOne()
}

console.log('value of fname is ',fname)
sayName()
