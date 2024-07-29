//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and length. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area  and perimeter.

class Rectangle {
  constructor(width, length) {
    if (typeof width !== 'number' || typeof length !== 'number') {
      throw new Error('Enter valid data');
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

try {
  const testCase1 = new Rectangle(2.2, 5);
  console.log(testCase1.calcArea());
  console.log(testCase1.calcPerimeter());

  //  For error checking
  // const testData2 = new Rectangle('2', 5);
  // console.log(testData2.calcArea());
} catch (err) {
  console.error(err.message);
}
