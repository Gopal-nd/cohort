
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  // Generate a random account number
  this.accountName = Math.round(Math.random() * 10000000000);
  this.balance = balance;

  // this.deposit = function(amount) {
  //   this.balance += amount;
  // };

  // this.withDraw = function(amount) {
  //   if (amount > this.balance) {
  //     console.log("Insufficient Balance");
  //     return;
  //   }
  //   this.balance -= amount;
  // };
}

// prototype will all to create functions once and it can be reused angain and again by instences , without cretaing each time ,which will take more space in memory



BankAccount.prototype.BankAccount = "This is a bank account constructor";
BankAccount.prototype.deposit =  function(amount) {
    this.balance += amount;
  };
BankAccount.prototype.withDraw = function(amount) {
    if (amount > this.balance) {
      console.log("Insufficient Balance");
      return;
    }
    this.balance -= amount;
  };


//console.log(BankAccount.prototype)
// ===========================
// DOM Manipulation

const accounts = [];

const accountForm = document.querySelector("#account");
const nameInput = document.querySelector("#name");
const amountInput = document.querySelector('#amount');

accountForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(accountForm);
  const name = formData.get("name");
  const amount = Number(formData.get("amount"));

  const user = new BankAccount(name, amount);
  console.log(user)
  accounts.push(user);
  userDetails(); // update the user details view
  console.log(accounts);
});

const depositForm = document.querySelector('#deposit');
const withdrawForm = document.querySelector('#withdraw');

depositForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(depositForm);
  const an = formData.get("accountNumber")
  const amount = formData.get('amount')
  
  // Use find() to get the actual account object
  const user = accounts.find((a) => a.accountName === +an);
  if (user) {
    user.deposit(+amount);
    userDetails(); // update view after deposit
  } else {
    console.log("Account not found for deposit");
  }
});

withdrawForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(withdrawForm);
  const an = Number(formData.get("accountNumber"));
  const amount = Number(formData.get('amount'));
  
  // Use find() to get the actual account object
  const user = accounts.find((a) => a.accountName === an);
  if (user) {
    user.withDraw(amount);
    if(user.balance < amount){
            alert("balance not available")
        }
    userDetails(); // update view after withdrawal
  } else {
    console.log("Account not found for withdrawal");
  }
});

function userDetails() {

  let userDiv = document.getElementById('allUser');
  if (!userDiv) {
    userDiv = document.createElement('div');
    userDiv.id = 'allUser';
    const container = document.getElementById('container');
    container.appendChild(userDiv);
  }
  
  
  // Generate HTML content for each account and update the div
  userDiv.innerHTML = accounts.map((a, i) => `
    <h1>User ${i + 1}</h1>
    <ul>
      <li>Customer Name: ${a.customerName}</li>
      <li>Account Number: ${a.accountName}</li>
      <li>Balance: $${a.balance}</li>
    </ul>
  `).join('');
}

