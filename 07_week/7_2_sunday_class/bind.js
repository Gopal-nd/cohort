

let person1 = {
    name:'gopal',
    greet:function(){
        console.log(`hello ${this.name}`)
    }
}

console.log("hi")

setTimeout(person1.greet.bind(person1), 5000);  

setTimeout(()=>person1.greet.call(person1), 5000);  


console.log('bye')