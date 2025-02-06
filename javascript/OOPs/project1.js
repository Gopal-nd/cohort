// 🔹 Class representing a single Transaction
class Transaction {
    constructor(transactionID, amount, type) {
        this.transactionID = transactionID;
        this.amount = amount;
        this.type = type;
        this.timestamp = new Date();
    }
}

// 🔹 Base Account Class
class Account {
    constructor(accountNumber, holderName, balance = 0) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
        this.transactionHistory = [];
    }

    // Deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactionHistory.push(new Transaction(this.generateTransactionID(), amount, "Deposit"));
            console.log(`₹${amount} deposited to account ${this.accountNumber}. New Balance: ₹${this.balance}`);
        } else {
            console.log("Deposit amount must be greater than zero.");
        }
    }

    // Withdraw money (to be overridden)
    withdraw(amount) {
        console.log("Withdraw method should be implemented in child classes.");
    }

    // View transaction history
    viewTransactions() {
        console.log(`Transaction History for Account ${this.accountNumber}:`);
        if (this.transactionHistory.length === 0) {
            console.log("No transactions found.");
        } else {
            this.transactionHistory.forEach((t, index) => {
                console.log(`${index + 1}. ${t.type} ₹${t.amount} on ${t.timestamp}`);
            });
        }
    }

    // Generate a unique transaction ID
    generateTransactionID() {
        return `${this.accountNumber}-${Date.now()}`;
    }
}

// 🔹 Savings Account Class (inherits from Account)
class SavingsAccount extends Account {
    constructor(accountNumber, holderName, balance = 0, interestRate = 4, withdrawLimit = 10) {
        super(accountNumber, holderName, balance);
        this.interestRate = interestRate;
        this.withdrawLimit = withdrawLimit;
        this.withdrawCount = 0;
    }

    // Withdraw money with limits
    withdraw(amount) {
        if (this.withdrawCount >= this.withdrawLimit) {
            console.log(`Withdrawal limit reached for account ${this.accountNumber}.`);
        } else if (amount > 0 && this.balance - amount >= 1000) { // ₹1000 min balance rule
            this.balance -= amount;
            this.withdrawCount++;
            this.transactionHistory.push(new Transaction(this.generateTransactionID(), amount, "Withdrawal"));
            console.log(`₹${amount} withdrawn from account ${this.accountNumber}. Remaining Balance: ₹${this.balance}`);
        } else {
            console.log(`Insufficient balance or minimum balance restriction applied.`);
        }
    }
}

// 🔹 Current Account Class (inherits from Account)
class CurrentAccount extends Account {
    constructor(accountNumber, holderName, balance = 0, overdraftLimit = 50000) {
        super(accountNumber, holderName, balance);
        this.overdraftLimit = overdraftLimit;
    }

    // Withdraw money with overdraft facility
    withdraw(amount) {
        if (this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            this.transactionHistory.push(new Transaction(this.generateTransactionID(), amount, "Withdrawal"));
            console.log(`₹${amount} withdrawn from account ${this.accountNumber}. New Balance: ₹${this.balance}`);
        } else {
            console.log(`Withdrawal denied! Overdraft limit exceeded.`);
        }
    }
}

// 🔹 Bank Class (Manages Accounts)
class Bank {
    constructor() {
        this.accounts = [];
    }

    // Create a new account
    createAccount(holderName, type) {
        const accountNumber = `AC${Math.floor(Math.random() * 1000000)}`;
        let newAccount;

        if (type === "Savings") {
            newAccount = new SavingsAccount(accountNumber, holderName, 1000); // Min ₹1000 opening balance
        } else if (type === "Current") {
            newAccount = new CurrentAccount(accountNumber, holderName);
        } else {
            console.log("Invalid account type.");
            return;
        }

        this.accounts.push(newAccount);
        console.log(`New ${type} Account created for ${holderName}. Account Number: ${accountNumber}`);
        return newAccount;
    }

    // Find an account by account number
    findAccount(accountNumber) {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }

    // Deposit money into an account
    deposit(accountNumber, amount) {
        const account = this.findAccount(accountNumber);
        if (account) {
            account.deposit(amount);
        } else {
            console.log(`Account ${accountNumber} not found.`);
        }
    }

    // Withdraw money from an account
    withdraw(accountNumber, amount) {
        const account = this.findAccount(accountNumber);
        if (account) {
            account.withdraw(amount);
        } else {
            console.log(`Account ${accountNumber} not found.`);
        }
    }

    // Transfer money between accounts
    transfer(fromAccountNumber, toAccountNumber, amount) {
        const fromAccount = this.findAccount(fromAccountNumber);
        const toAccount = this.findAccount(toAccountNumber);

        if (!fromAccount || !toAccount) {
            console.log("One or both accounts not found.");
            return;
        }

        if (amount > 0 && (fromAccount.balance - amount >= -fromAccount.overdraftLimit)) {
            fromAccount.withdraw(amount);
            toAccount.deposit(amount);
            console.log(`₹${amount} transferred from ${fromAccountNumber} to ${toAccountNumber}`);
        } else {
            console.log("Insufficient balance or overdraft limit exceeded.");
        }
    }

    // View account transaction history
    viewTransactions(accountNumber) {
        const account = this.findAccount(accountNumber);
        if (account) {
            account.viewTransactions();
        } else {
            console.log(`Account ${accountNumber} not found.`);
        }
    }
}

// 📌 DEMO USAGE
const myBank = new Bank();

// Creating accounts
const acc1 = myBank.createAccount("Alice", "Savings");
const acc2 = myBank.createAccount("Bob", "Current");

// Depositing money
myBank.deposit(acc1.accountNumber, 5000);
myBank.deposit(acc2.accountNumber, 10000);

// Withdrawing money
myBank.withdraw(acc1.accountNumber, 2000); // Should work (min balance ₹1000 rule)
myBank.withdraw(acc2.accountNumber, 60000); // Should fail (overdraft limit ₹50000)

// Transfer funds
myBank.transfer(acc1.accountNumber, acc2.accountNumber, 1000);

// View transaction history
myBank.viewTransactions(acc1.accountNumber);
myBank.viewTransactions(acc2.accountNumber);

