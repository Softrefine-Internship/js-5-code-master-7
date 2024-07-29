// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
  constructor(name, department) {
    this.name = name;
    this.department = department.map((element) => element.toLowerCase());
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
      throw new Error(`${newdepartment} department already exist`);

    this.department.push(newdepartment.toLowerCase());

    return console.log(`${newdepartment} department added.`);
  }

  removedepartment(departmentName = '') {
    if (departmentName != '') {
      if (!this.department.includes(departmentName.toLowerCase()))
        throw new Error(`${departmentName} department don't exist`);

      this.department = this.department.filter(
        (dName) => dName != departmentName.toLowerCase()
      );

      return console.log(
        `${departmentName.toLowerCase()} department was removed`
      );
    }

    return console.log(`${this.department.pop()} department was removed`);
  }
}

try {
  const uniObj = new University('GTU', ['RaJkot', 'Junagadh']);

  uniObj.displayAlldepartment();
  uniObj.adddepartment('Ahmeadbad');
  uniObj.displayAlldepartment();
  // uniObj.adddepartment('Ahmeadbad');

  uniObj.removedepartment();
  uniObj.displayAlldepartment();
  uniObj.removedepartment('junaGadh');
  uniObj.displayAlldepartment();
  // uniObj.removedepartment('junaGadh');
} catch (err) {
  console.error(err.message);
}
