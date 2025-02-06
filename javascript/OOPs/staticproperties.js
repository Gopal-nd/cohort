// utility functions

// config properties 

// class config{
// static secret = "secret";
// static password = "this  d y7816377e%%&&(*&^$%)";
//     static api = "^&*(&(*6797^97*(7)))";
// }

// let some = new config()


// console.log(config.password)

class User {
  static id = 1;
  constructor(name,age,income ){
    this.name = name;
    this.age = age;
    this.income = income
    this.id = User.id++;
  }

  static{
    console.log("Initalized the process")
  }

  static compareAge(user1,user2){
    return user1.age - user2.age;
  }

  static ComplareSalary(user1,user2){
    return user1.income - user2.income
  }

  static Sum(a,b){
    return a+b;
  }

  fun(){
    console.log("having fun.:...:")
  }

  static masterOfFun(){
    fun
  }
}


let user1 = new User("Manu",12,121)
let user2 = new User("AManu",99,111)
let user3 = new User("Sam",66,679)

let users = [user1,user2,user3]

users.sort(User.compareAge) // just giving the reference
users.sort(User.ComplareSalary)  // just give the reference
console.log(users)

console.log(User.Sum(1,2))
user1.masterOfFun()
User.masterOfFun()
// staic can directuly called using the class name
