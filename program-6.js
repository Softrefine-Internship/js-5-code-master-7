// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
  constructor(name, salary) {
    if (typeof salary !== 'number') {
      throw new Error('Enter valid data for employee');
    }

    this.name = name;
    this.salary = salary;
  }

  calcAnualSalary() {
    console.log(`${this.name} has annual salary of ${this.salary * 12}.`);
  }
}

class Manager extends Employee {
  #bonus;
  constructor(name, salary, bonus) {
    if (typeof bonus !== 'number') {
      throw new Error('Enter valid bonus data');
    }
    super(name, salary);
    this.#bonus = bonus;
  }

  calcAnualSalary() {
    console.log(
      `${this.name} has annual income of ${this.salary * 12 + this.#bonus}.`
    );
  }
}

try {
  const managerObj = new Manager('XYZ', 50000, 10000);

  managerObj.calcAnualSalary();
} catch (err) {
  console.error(err.message);
}
