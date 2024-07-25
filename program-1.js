// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class person {
  name;
  age;
  conutry;

  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  display() {
    return `Hi I am ${this.name}. My age is ${this.age}, and I live in ${this.country}.`;
  }
}

const nims = new person('nimesh', 21, 'India');

const nims2 = new person('nimesh2', 22, 'USA');

console.log(nims.display());

console.log(nims2.display());
