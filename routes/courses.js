var express = require('express');
var router = express.Router();
const coursesHandler = require('./handler/courses')
const verifyToken = require('../middleware/verifyToken')

const can = require("../middleware/permission.js")

router.get('/', coursesHandler.getAll)
router.get('/:id', coursesHandler.get)

router.post('/', verifyToken, can('admin'), coursesHandler.create)
router.put('/:id', verifyToken, can('admin'), coursesHandler.update)
router.delete('/:id', verifyToken, can('admin'), coursesHandler.destroy)

module.exports = router;
