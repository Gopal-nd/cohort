class BankAccount {
  customerName;
  // Generate a random account number
  accountName = Math.round(Math.random() * 10000000000);
  #balance;
  constructor(name,balance=0){
    this.customerName = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  };

  withDraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient Balance");
      return;
    }
    this.#balance -= amount;
  };

  // tradetional methods
   getBalance() {
    return this.#balance;
  }

   setBalance(amount){
    this.#balance = amount;
  }


  // useage of the getter and setter
  set balance(amount){
    if(isNaN(amount)){
      throw new Error("it is not a valid amount")
    }
    return this.#balance = amount;
  }

  get balance(){
    return this.#balance;
  }
}

class CurretAccount extends BankAccount{
  transactionLimit = 50000;

  constructor(name, balance =0){
    super(name,balance)
  }


    #calculateTheIntrest(){
      console.log("ya it is done");
    }

  TakebussinusseLone(amount){
  this.#calculateTheIntrest()
      console.log(amount," loan taken")
  }
}


//------------------------- BankAccount

let user = new BankAccount("Gopal",5362)
user.balance = 1837;

console.log(user.balance)




// trdetional methods
// console.log(user.setBalance(100000))
// console.log(user.getBalance())



// ------------------------ CurretAccount 
// let rich = new CurretAccount("mano",10000)
// rich.deposit(100000)
// console.log(rich)



