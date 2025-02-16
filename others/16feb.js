Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`)
}

function chai(){
    console.log('hi')
}
chai.describe()

let parameter = function(name){  //parameter
console.log(name)
}

parameter('chai') //argument


function add(a,b){   //function declareation
    return a+b;
}

const sub = function(a,b){    // function expression
    return a-b;
}

const mul = (a,b)=>a*b;

function applyOperation(a,b,Operation){    // first class function
    return Operation(a,b)
}

const res = applyOperation(5,4,(x,y)=>x/y)

console.log(res)

//------------------------------------------------

function createCounter(){
    let count =0;
    return function ok(){         //socping   | lexical scopping | closure 
        count++;               // while returning a function it will return all the function and also the defnation and innervariable
        return count
    }
}

let funCounter = createCounter()
console.log(funCounter)
let finalAns = funCounter()
console.log(finalAns)





// (function () {
//     console.log(11);
// })();
// immideatly invoked function expressions
  
//---------

console.log(console.log('hello'))