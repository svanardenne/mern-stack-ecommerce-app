const express = require('express');

// router
const router = express.Router();

const {sayHi} = require('../controllers/user');

router.get('/', sayHi);

module.exports = router;