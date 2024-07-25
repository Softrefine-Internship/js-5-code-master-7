// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  #balance;
  accNumber;

  constructor(accountNumber, balance) {
    if (typeof accountNumber != typeof 1 || typeof balance != typeof 1) {
      console.log('Enter valid data');
      return;
    }

    this.accNumber = accountNumber;
    this.#balance = balance;
  }

  deposite(ammount) {
    if (typeof ammount != typeof 1) return 'Enter valid data';

    if (ammount <= 0) return `Can't deposite ${ammount}`;

    this.#balance += ammount;

    return `Deposited ${ammount} to account number ${
      this.accNumber
    }, New balance: ${this.#balance}`;
  }

  withdraw(ammount) {
    if (typeof ammount != typeof 1) return 'Enter valid data';

    if (ammount <= 0) return `Can't withdraw ${ammount}`;

    if (this.#balance < ammount)
      return `You don't have enough balance. Current balance: ${this.#balance}`;

    this.#balance -= ammount;

    return `Withdraw ${ammount} to account number ${
      this.accNumber
    }, New balance: ${this.#balance}`;
  }
}

const acc1 = new BankAccount(123, 1000);

console.log(acc1.deposite(0));
console.log(acc1.deposite(-10));
console.log(acc1.deposite(100));
console.log(acc1.withdraw(-100));
console.log(acc1.withdraw(0));
console.log(acc1.withdraw(100000));
console.log(acc1.withdraw(100));
