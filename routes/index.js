var express = require('express');
var router = express.Router();

var Products = [
  {
    name: "Apple watch",
    price: 300,
    image: "apple-watch"
  }, {
    name: "Porte document",
    price: 76,
    image: "porte-doc"
  }, {
    name: "DJI mavic air",
    price: 989,
    image: "dji-mavic-air"
  }, {
    name: "Oculus",
    price: 342,
    image: "oculus"
  }, {
    name: "Bose QC35",
    price: 155,
    image: "bose-qc35"
  }, {
    name: "Xiaomi-m365",
    price: 674,
    image: "xiaomi-m365"
  }, {
    name: "BRIG Eagle 380",
    price: 15500,
    image: "BRIG-Eagle-380"
  }, {
    name: "Linda Razer",
    price: 897,
    image: "linda"
  }, {
    name: "Fort 500",
    price: 67,
    image: "fort-500"
  }, {
    name: "OnePlus 6",
    price: 540,
    image: "one-plus6"
  }
]

router.get('/', function(req, res, next) {
  res.render('index', {Products});
});


router.get('/basket', function(req, res, next) {
  res.render('basket');
});


module.exports = router;
