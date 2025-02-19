




const obj =  Object.create(Object.prototype,{
    a:{
        value:function(){
            console.log('hi')
        },
        writable:true,
        enumerable:true,
        configurable:true
    },
    b:{
        value:2,
        writable:false,
        enumerable:true,
        configurable:true
    },
    c:{
        value:5,
        writable:true,
        enumerable:true,
        configurable:true
    }
})




Object.defineProperties(obj,{
    MyPi:{
        value:3.14,
        writable:true,
        enumerable:true,
        configurable:true
    }
})

console.log(obj.a())
console.log(obj.b)
console.log(obj.c)
console.log(obj.MyPi)

obj.b = 10;
obj.c = 10;

console.log(obj.a())
console.log(obj.b)
console.log(obj.c)
console.log(obj.MyPi)

const additionalProps = {
    bb: 2,
    greet() {
      console.log("Hello from merged method!");
    }
  };


  Object.assign(obj, additionalProps);
const discripter = Object.getOwnPropertyDescriptor(obj,"b")


console.log(discripter)
console.log(obj)


//--------------------------------------------------
//or

const myObject = {
    bb: 2,
    greet() {
      console.log("Hello from merged method!");
    }
}
Object.defineProperties(myObject,{
    bb:{
        value:3.14,
        writable:false,
        enumerable:true, // it means use of loops
        configurable:true
    }
})
const my = Object.getOwnPropertyDescriptor(myObject,"bb")


console.log(my)

console.log(Object.values(myObject))


// const math = Object.defineProperties(Math,{
//     PI:{
//         value:4,
//         writable:true,
//         enumerable:true,
//         configurable:true
//     }
// })



// console.log(math.PI)


for (const [key,value] of Object.entries(Math)) {

        const element = object[key];
        console.log(`${key}->${value}`)
        
    
}