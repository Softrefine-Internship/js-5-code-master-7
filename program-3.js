// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  display() {
    return `The Vehical is made by ${this.make}, model: ${this.model} and made in ${this.year}.`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, door) {
    super(make, model, year);
    this.door = door;
  }

  display() {
    return `${super.display()} And its ${this.door} door car.`;
  }
}

const dream = new Car('BMW', 'M6 compatation', 2020, 4);

console.log(dream.display());
