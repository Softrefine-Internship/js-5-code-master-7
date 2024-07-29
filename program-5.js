// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  constructor() {
    this.pi = Math.PI;
  }

  calcArea() {}
}

class Circle extends Shape {
  constructor(radious) {
    if (typeof radious !== 'number') {
      throw new Error('Enter valid data in circle object');
    }

    super();
    this.radious = radious;
  }

  calcArea() {
    return Math.pow(this.radious, 2) * this.pi;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    if (typeof base !== 'number' || typeof height !== 'number') {
      throw new Error('Enter valid data in triangle object');
    }

    super();
    this.base = base;
    this.height = height;
  }

  calcArea() {
    return 0.5 * (this.base * this.height);
  }
}

try {
  const circleObj = new Circle(2);

  console.log(circleObj.calcArea());

  const triangleObj = new Triangle(2, 4);

  console.log(triangleObj.calcArea());

  // Error testing
  // const tObj = new Triangle('2', 4);
} catch (err) {
  console.error(err.message);
}
