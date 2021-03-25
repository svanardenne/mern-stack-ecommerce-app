const express = require('express');

// router
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from node hay');
});

module.exports = router;