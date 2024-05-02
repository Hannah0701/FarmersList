// 1. In `Cart.js`, create a class called `Cart` using the class diagram above. `Cart` should have the following properties and methods:
class Cart {
//     - **Properties**
//         - `products`: An array that will store instances of `Product` that have been added to the cart. Starts as an empty array.
//         - `total`: A number representing the total cost of all products in the cart. Starts with a value of 0.
    constructor(products, total){
        this.products = [];
        this.total = 0;
    }

//     - **Methods**
//         - `addProduct`: A method that adds a `Product` instance to the **end** of the `products` array and updates the `total` property accordingly.
//         - `removeProduct(i)`: A method that removes a `Product` instance from the `products` array at a specified index `i` and updates the `total` property accordingly.

    addProduct(product){
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(i){
        this.total -= this.products[i].price;
        this.products.splice(i, 1);
    }
}

// 2. Export the class using `module.exports`.

module.exports = { Cart };

// 3. Import the class into `index.js` with the name `Cart`.