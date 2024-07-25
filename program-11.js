// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
  accountNumber;
  name;
  #balance;

  constructor(accountNumber, name, balance) {
    this.accNumber = accountNumber;
    this.name = name;
    this.#balance = balance;
  }

  displayBalance() {
    console.log(this.#balance);
  }

  deposite(ammount) {
    if (typeof ammount != typeof 1) {
      console.log('Enter valid data');
      return false;
    }
    if (ammount <= 0) {
      console.log(`Can't deposite ${ammount}`);
      return false;
    }

    this.#balance += ammount;

    return true;
  }

  withdraw(ammount) {
    if (typeof ammount != typeof 1) {
      console.log('Enter valid data');
      return false;
    }

    if (ammount <= 0) {
      console.log(`Can't withdraw ${ammount}`);
      return false;
    }

    if (this.#balance < ammount) {
      console.log(
        `You don't have enough balance. Current balance: ${this.#balance}`
      );
      return false;
    }

    this.#balance -= ammount;

    return true;
  }

  transfer(ammount, accObj) {
    if (ammount <= 0) {
      return console.log(`Can't Transfer ${ammount}`);
    }

    if (this.#balance < ammount) {
      return console.log(
        `You don't have enough balance to transfer. Current balance: ${
          this.#balance
        }`
      );
    }

    if (!(accObj instanceof BankAccount)) {
      return console.log(`No such account exist`);
    }

    if (this.withdraw(ammount) && accObj.deposite(ammount)) {
      return true;
    } else {
      console.log('Error While transfering');
      return false;
    }
  }
}

const acc1 = new BankAccount('01', 'Nims', 2000);

const acc2 = new BankAccount('02', 'Nims2', 1000);

class test {
  constructor() {}
}
const acc3 = new test();
acc1.transfer(1000, acc3);

acc2.displayBalance();
acc1.transfer(500, acc2) && console.log('Transfer success');
acc2.displayBalance();

acc1.deposite('20');

acc1.deposite(20) && console.log('Deposited');
acc1.displayBalance();

acc1.withdraw('200');

acc1.withdraw(200) && console.log('Withdraw');
acc1.displayBalance();
