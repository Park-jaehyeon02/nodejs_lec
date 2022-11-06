const { v4: uuidv4 } = require('uuid');

class Product {
  constructor({ name, category, price }) {
    this.id = uuidv4();
    this.name = name;
    this.category = category;
    this.price = price;
  }

  //   constructor(value) {
  //     this.name = value.name;
  //     this.category = value.category;
  //     this.price = value.price;
  //   }
}

// const p1 = new Product({
//   id: 'sch_test',
//   name: 'test name',
//   category: 'food',
//   price: 2000,
// });

module.exports = {
  Product, // Product:Product,
};
