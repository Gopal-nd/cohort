// call 
//bind
// applay

//call

function userName(username){
    this.username = username
    console.log('called')
}

function createAccount(username, email,password){
    userName.call(this,username)// this will pass to the function and send  execution context to the other function
    this.email = email
    this.password = password

    
}

const user = new createAccount('gopal','gopal@gmail.com',123)
console.log(user)

