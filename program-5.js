// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  pi = 3.14;
  constructor() {}
}

class Circle extends Shape {
  radious;

  constructor(radious) {
    if (typeof radious != typeof 1) {
      console.log('Enter valid data');
      return;
    }

    super();
    this.radious = radious;
  }

  calcArea() {
    return Math.pow(this.radious, 2) * this.pi;
  }
}

class Triangle extends Shape {
  base;
  height;
  constructor(base, height) {
    if (typeof base != typeof 1 || typeof height != typeof 1) {
      console.log('Enter valid data');
      return;
    }

    super();
    this.base = base;
    this.height = height;
  }

  calcArea() {
    return 0.5 * (this.base * this.height);
  }
}

const circleObj = new Circle(2);

console.log(circleObj.calcArea());

const triangleObj = new Triangle(2, 4);

console.log(triangleObj.calcArea());
