// class 

class User {
    constructor(name,email,password){
        this.name = name
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return this.password + "hhdafg2y7"
    }

}


let u1 = new User('gopal','email@gmail.com','123')



console.log(u1.encryptPassword())


console.log(u1 instanceof User)
