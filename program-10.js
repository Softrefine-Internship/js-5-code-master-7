// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  constructor(productId, name, price, quantity) {
    if (typeof price !== 'number' || typeof quantity !== 'number') {
      throw new Error('Enter valid data');
    }

    this.productId = productId;
    this.price = price;
    this.name = name;
    this.quantity = quantity;
  }

  totalPriceCalculation() {
    console.log(
      `Total value of Product ID:${this.productId} - "${this.name}" is ${
        this.price * this.quantity
      }`
    );
    return `Total value of Product ID:${this.productId} - "${this.name}" is ${
      this.price * this.quantity
    }`;
  }
}

class PersonalCareProduct extends Product {
  constructor(productId, name, price, quantity, period) {
    super(productId, name, price, quantity);
    this.warrantyPeriod = period;
  }

  totalPriceCalculation() {
    console.log(
      `${super.totalPriceCalculation()} and has warenty period of ${
        this.warrantyPeriod
      }`
    );
  }
}

try {
  const faceWash = new PersonalCareProduct(
    '00124',
    'neem Face wash',
    200,
    50,
    '3 year'
  );

  faceWash.totalPriceCalculation();
} catch (err) {
  console.error(err.message);
}
