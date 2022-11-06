const { v4: uuidv4 } = require(uuidv4);

class CartItem {
  constructor({ registeredAt, productId, productCount }) {
    //this.id = id;
    this.registeredAt = registeredAt;
    this.productId = productId;
    this.productCount = productCount;
  }
}

// const p1 = new Product({
//   id: 'sch_test',
//   name: 'test name',
//   category: 'food',
//   price: 2000,
// });

// const product = new CartItem({
//   registeredAt: new Date(),
//   productId: p1.id,
//   productCount: 20,
// });

module.exports = {
  CartItem: CartItem,
};
