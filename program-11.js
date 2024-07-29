// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
  #balance;
  constructor(accountNumber, name, balance) {
    this.accNumber = accountNumber;
    this.name = name;
    this.#balance = balance;
  }

  displayBalance() {
    console.log(this.#balance);
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
      return true;
    }
  }

  withdraw(ammount) {
    if (this._validInput('withdraw', ammount)) {
      if (this.#balance < ammount)
        throw new Error(
          `You don't have enough balance. Current balance: ${this.#balance}`
        );

      this.#balance -= ammount;

      return true;
    }
  }

  transfer(ammount, accObj) {
    if (!(accObj instanceof BankAccount))
      throw new Error(`No such account exist`);

    if (this.withdraw(ammount) && accObj.deposite(ammount)) return true;
    else throw new Error(`Can't transfer`);
  }
}

try {
  const acc1 = new BankAccount('01', 'Nims', 2000);

  const acc2 = new BankAccount('02', 'Nims2', 1000);

  // class test {
  //   constructor() {}
  // }
  // const acc3 = new test();
  // acc1.transfer(1000, acc3);

  acc1.displayBalance();
  acc2.displayBalance();
  acc1.transfer(500, acc2) && console.log('Transfer success');
  acc1.displayBalance();
  acc2.displayBalance();

  // acc1.deposite('20');

  acc1.deposite(20) && console.log('Deposited');
  acc1.displayBalance();

  // acc1.withdraw('200');

  acc1.withdraw(200) && console.log('Withdraw');
  acc1.displayBalance();
} catch (err) {
  console.error(err.message);
}
