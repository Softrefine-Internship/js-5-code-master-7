// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
  name;
  department = [];

  constructor(name, department) {
    this.name = name;
    department.map((b) => this.department.push(b.toLowerCase()));
  }

  displayAlldepartment() {
    console.log(
      `${this.name} has department at "${this.department.map(
        (bName) => bName
      )}" `
    );
  }

  adddepartment(newdepartment) {
    if (this.department.includes(newdepartment.toLowerCase()))
      return console.log(`${newdepartment} department already exist`);

    this.department.push(newdepartment.toLowerCase());

    return console.log(`${newdepartment} department added.`);
  }

  removedepartment(departmentName = '') {
    if (departmentName != '') {
      if (!this.department.includes(departmentName.toLowerCase())) {
        return console.log(`${departmentName} department don't exist`);
      }

      this.department = this.department.filter(
        (dName) => dName != departmentName.toLowerCase()
      );

      return console.log(
        `${departmentName.toLowerCase()} department was removed`
      );
    }

    return console.log(`${this.department.pop()} department was removed`);
  }
  x;
}

const uniObj = new University('GTU', ['Rajkot', 'Junagadh']);

uniObj.displayAlldepartment();
uniObj.adddepartment('Ahmeadbad');
uniObj.displayAlldepartment();
uniObj.adddepartment('Ahmeadbad');

uniObj.removedepartment();
uniObj.displayAlldepartment();
uniObj.removedepartment('junaGadh');
uniObj.displayAlldepartment();
uniObj.removedepartment('junaGadh');
