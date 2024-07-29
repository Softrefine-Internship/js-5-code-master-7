// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  #balance;

  constructor(accountNumber, balance) {
    if (typeof accountNumber !== 'number' || typeof balance !== 'number') {
      throw new Error('Enter valid data');
    }

    this.accNumber = accountNumber;
    this.#balance = balance;
  }

  getBalance() {
    return `${this.#balance} is your Current balance of account number ${
      this.accNumber
    } `;
  }

  _validInput(operation, ammount) {
    if (typeof ammount !== 'number')
      throw new Error(`Enter valid data in ${operation}`);

    if (ammount <= 0) throw new Error(`Can't ${operation} ${ammount}`);

    return true;
  }

  deposite(ammount) {
    if (this._validInput('Deposite', ammount)) {
      this.#balance += ammount;
      return `Deposited ${ammount} to account number ${
        this.accNumber
      }, New balance: ${this.#balance}`;
    }
  }

  withdraw(ammount) {
    if (this._validInput('withdraw', ammount)) {
      this.#balance += ammount;

      if (this.#balance < ammount)
        throw new Error(
          `You don't have enough balance. Current balance: ${this.#balance}`
        );

      this.#balance -= ammount;

      return `Withdraw ${ammount} to account number ${
        this.accNumber
      }, New balance: ${this.#balance}`;
    }
  }
}

try {
  const acc1 = new BankAccount(123, 1000);

  // console.log(acc1.deposite(0));  // testing
  // console.log(acc1.deposite(-10)); // testing
  console.log(acc1.deposite(100));
  // console.log(acc1.withdraw(-100)); // testing
  // console.log(acc1.withdraw(0)); // testing
  console.log(acc1.withdraw(100000));
  console.log(acc1.withdraw(100));

  console.log(acc1.getBalance());
} catch (err) {
  console.error(err.message);
}
