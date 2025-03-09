

console.log(this)
function sayHello(){
    console.log(this)
}
sayHello.call(null)