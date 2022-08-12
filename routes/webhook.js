var express = require('express');
var router = express.Router();
const webhookHandler = require('./handler/webhook')

router.post('/', webhookHandler.webhook)

module.exports = router;
