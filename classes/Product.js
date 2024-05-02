// Export the class using module.exports.
// In Product.js, create a class called Product using the following class diagram above. Product should have the following properties and methods:
class Product {
  // name, price, and description are set by the constructor method.
  // inStock is set to true when the instance of the class is created.
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.inStock = true;
  }

  // display() returns a string in the following format "Name: <NAME>, Price: $<PRICE>, Description: <DESCRIPTION>".
  display() {
    return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`;
  }
}

// Import the class into index.js with the name Product.

module.exports = { Product };