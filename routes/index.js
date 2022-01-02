var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cart', function(req, res, next) {
  res.render('shopping/cart');
});

router.get('/checkout', function(req, res, next) {
  res.render('shopping/checkout');
});

router.get('/checkout', function(req, res, next) {
  res.render('shopping/product');
});

router.get('/account', function(req, res, next) {
  res.render('shopping/account');
});

module.exports = router;
