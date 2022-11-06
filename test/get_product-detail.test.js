var request = require('request');
var expect = require('chai').expect;

var assert = require('assert');
describe('Product', function () {
  describe('Get list', function () {
    it("should return 1 Item's name list when requested", function (done) {
      //assert.equal(["test name"].length, 1);
      request.get(
        'http://localhost:3000/product-detail',
        function (err, res, body) {
          expect(res.statusCode).to.equal(200);
          const product = JSON.parse(res.body);
          assert(product.name, 'test name');
          done();
        },
      );
    });
  });
});
