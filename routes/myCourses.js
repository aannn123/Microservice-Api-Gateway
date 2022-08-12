var express = require('express');
var router = express.Router();
const myCoursesHandler = require('./handler/my-course')

router.get('/', myCoursesHandler.get)
router.post('/', myCoursesHandler.create)

module.exports = router;
