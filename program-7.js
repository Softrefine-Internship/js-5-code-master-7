// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
  title;
  author;
  pYear;

  constructor(title, author, pYear) {
    this.title = title;
    this.author = author;
    this.pYear = pYear;
  }

  display() {
    console.log(
      `Book '${this.title}' was written by '${this.author}' in ${this.pYear}`
    );
  }
}

class Ebook extends Book {
  price;

  constructor(title, author, pYear, price) {
    super(title, author, pYear);
    this.price = price;
  }

  display() {
    console.log(
      `Book '${this.title}' was written by '${this.author}' in ${this.pYear} and price is: ${this.price}`
    );
  }
}

const eBookObj = new Ebook('Java', 'ABCD', 2008, 1500);

eBookObj.display();
