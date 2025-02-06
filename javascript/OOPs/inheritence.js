class BankAccount {
  customerName;
  // Generate a random account number
  accountName = Math.round(Math.random() * 10000000000);
  balance;
  constructor(name,balance=0){
    this.customerName = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  };

  withDraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient Balance");
      return;
    }
    this.balance -= amount;
  };
}

class CurretAccount extends BankAccount{
  transactionLimit = 50000;

  constructor(name, balance =0){
    super(name,balance)
  }

  TakebussinusseLone(amount){
      console.log(amount," loan taken")
  }
}

class SavingsAccount extends BankAccount{
  transactionLimit = 10000;

  constructor(name,balance =0){
    super(name,balance)
  }
  personalLoan(amount){
    console.log(amount," lone taken")

  }
}

let rich = new CurretAccount("mano",10000)
rich.deposit(100000)
console.log(rich)
