const { json } = require('body-parser');
const express = require('express');
const app = express();
var cart = [];

app.get('/', function (req, res) {
  console.log('Hellow Wrold');
  res.send(null);
});

app.get('/product-list', function (req, res) {
  const Product = [{ name: 'test name' }];
  res.send(JSON.stringify(Product));
});

app.get('/product-detail', function (req, res) {
  //res.statusCode = 404;
  //res.end();

  const Product = [{ name: 'test name' }];
  res.send(JSON.stringify(Product));
});

app.get('/add-to-cart', function (req, res) {
  //res.statusCode = 404;
  //res.end();
  console.log(JSON.stringify(req.query, null, 2));
  const productName = req.query['productName'];
  cart.push(productName);
  console.log('Cart :', cart);
  res.send(JSON.stringify(productName));
});
app.listen(3000);
