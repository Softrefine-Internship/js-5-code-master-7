// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
  name;
  branch = [];

  constructor(name, branch) {
    this.name = name;
    branch.map((b) => this.branch.push(b.toLowerCase()));
  }

  displayAllBranch() {
    console.log(
      `${this.name} has branch at "${this.branch.map((bName) => bName)}" `
    );
  }

  addBranch(newBranch) {
    if (this.branch.includes(newBranch.toLowerCase()))
      return console.log(`${newBranch} Branch already exist`);

    this.branch.push(newBranch.toLowerCase());

    return console.log(`${newBranch} branch added.`);
  }

  removeBranch(branchName = '') {
    if (branchName != '') {
      if (!this.branch.includes(branchName.toLowerCase())) {
        return console.log(`${branchName} branch don't exist`);
      }

      this.branch = this.branch.filter(
        (bName) => bName != branchName.toLowerCase()
      );

      return console.log(`${branchName} branch was removed`);
    }

    return console.log(`${this.branch.pop()} branch was removed`);
  }
}

const sbiObj = new Bank('SBI', ['majavadi', 'rajkot']);

sbiObj.displayAllBranch();
sbiObj.addBranch('zanzarda');
sbiObj.displayAllBranch();
sbiObj.addBranch('zanzarda');
sbiObj.removeBranch();
sbiObj.removeBranch('abc');
sbiObj.removeBranch('majavadi');

sbiObj.displayAllBranch();
