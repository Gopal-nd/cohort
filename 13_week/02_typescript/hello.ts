let x = 30
let y = 40

let something: number | boolean | string 


function add(x:number,y:number):number{
    console.log(x.toFixed(3))
    return x+y

}
console.log(add(200,3))


//  provide type safety
// also can run built in methods as it know the types




function createUser(user:{firstName:string; lastName?:string; email:string}){
    console.log(user.email)
    if(!user.lastName) return
    const trim:string = user.lastName?.trim() 
}

createUser({email:'me@gmail',firstName:'Gopal'})



// typescipt is all about defining the types 

interface User {
    firstName:string;
    lastName?:string;
    email:string;
    calculate:(x:number, y:number)=> number,
    profilePicture?:string
}


function updateUser(user:User){
let res = user.calculate(3,4)
console.log(res)

}

updateUser({firstName:'man',calculate:(x,y)=>{return x+y },email:'superman'})