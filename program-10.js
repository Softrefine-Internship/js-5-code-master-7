// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  productId;
  name;
  price;
  quantity;

  constructor(productId, name, price, quantity) {
    if (typeof price != typeof 1 || typeof quantity != typeof 1) {
      console.log('Enter valid data');
      return;
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
      } 
      }`
    );
  }
}

class PersonalCareProduct extends Product {
  warrantyPeriod;

  constructor(productId, name, price, quantity, period) {
    super(productId, name, price, quantity);
    this.warrantyPeriod = period;
  }

  totalPriceCalculation() {
    console.log(
      `Total value of Product ID:${this.productId} - "${this.name}" is ${
        this.price * this.quantity
      } and has warenty period of ${this.warrantyPeriod}`
    );
  }
}

const faceWash = new PersonalCareProduct(
  '00124',
  'neem Face wash',
  200,
  50,
  '3 year'
);

faceWash.totalPriceCalculation();
