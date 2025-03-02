function incremnet(){
     count = 0;
    //clouser
    return function(){
        count++
        return count
    }
}

// console.log(incremnet()())  // return 1

// now now one can change the count
// count =100

const x =incremnet()
const y =incremnet()

x()
y()
x()
y()

console.log(x,y())


// dis advantage memory leak

x = null  // will remove the reference

