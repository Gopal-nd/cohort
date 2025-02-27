
// Arrray is a class  because the First letter is UpperCase


Array.prototype.halulu = function(){
    console.log(this)
    console.log('---------')
    console.log(arguments[0])
    console.log(this[0],"is the halulu")
}

let arr = [1.2,3,3,3,3,33,3,3,3,3,3,3,9]

arr.halulu(11)