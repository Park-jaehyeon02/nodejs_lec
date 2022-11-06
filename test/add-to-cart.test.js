var request = require('request');
var expect = require('chai').expect;
var assert = require('assert');

describe('Cart', function () {
  describe('add product', function () {
    it('should return product name when request is suceeded', function (done) {
      request.get(
        'http://localhost:3000/product-list',
        function (err, res, body) {
          expect(res.statusCode).to.equal(200);
          const product = JSON.parse(res.body);
          expect(products.length).to.equal(1);

          request.get(
            'http://localhost:3000/add-to-cart?productId= ${products[0].id} &productCount=1',
            function (err, res, body) {
              expect(res.statusCode).to.equal(200);
              const productId = res.body;
              assert(productID, '1');
              done();
            },
          );
        },
      );
    });
  });
});
