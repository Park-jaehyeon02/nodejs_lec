const { json } = require('body-parser');
const express = require('express');
const app = express();

const cartInventory = [];
const CartItem = require('./entities/cart-item').CartItem;

const Product = require('./entities/product').Product;
const product = new Product({
  name: 'test name',
  category: 'food',
  price: 100,
});
const products = [product];

app.get('/', function (req, res) {
  res.send('Home!');
});

app.get('/product-list', function (req, res) {
  res.send(JSON.stringify(Product));
});

app.get('/product-detail', function (req, res) {
  const productId = req.query['productId'];

  // Query Cehck
  if (!productId) {
    res.statusCode = 400;
    res.end();
    return;
  }

  // Search productID
  const product = products.find((item) => item.id === productId);
  if (!product) {
    res.statusCode = 404;
    res.end();
    return;
  }

  res.send(JSON.stringify(Product));
});

app.get('/add-to-cart', function (req, res) {
  //res.statusCode = 404;
  //res.end();

  console.log(JSON.stringify(req.query, null, 2));
  const productId = req.query['productId'];
  const productCount = req.query['productCount'];

  const cartItem = new CartItem({
    registerdAt: new Date(),
    productId: productId,
    productCount: productCount,
  });

  //cartInventory.push(productItem);
  res.send();
});
app.listen(3000, () => console.log('app start to listen port 3000...'));
