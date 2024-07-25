//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and length. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area  and perimeter.

class Rectangle {
  width;
  length;

  constructor(width, length) {
    if (typeof width != typeof 1 || typeof length != typeof 1) {
      console.log('Enter valid data');
      return;
    }

    this.width = width;
    this.length = length;
  }

  calcArea() {
    return this.width * this.length;
  }

  calcPerimeter() {
    return (this.length + this.width) * 2;
  }
}

const testCase1 = new Rectangle(2.2, 5);

console.log(testCase1.calcArea());
console.log(testCase1.calcPerimeter());

// const testData2 = new Rectangle('2', 5);

// console.log(testData2.calcArea());
