class Cart {
  constructor({ registeredAt, productId, productCount }) {
    //this.id = id;
    this.registeredAt = registeredAt;
    this.productId = productId;
    this.productCount = productCount;
  }
}

const p1 = new Product({
  id: 'sch_test',
  name: 'test name',
  category: 'food',
  price: 2000,
});

const c1 = new Cart({
  registeredAt: new Date(),
  productId: p1.id,
  productCount: 20,
});
