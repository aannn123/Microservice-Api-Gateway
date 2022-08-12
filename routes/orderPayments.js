var express = require('express');
var router = express.Router();
const orderPaymentHandler = require('./handler/order-payment')

router.get('/', orderPaymentHandler.getOrder)

module.exports = router;
