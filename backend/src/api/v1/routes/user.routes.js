const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'All users fetched'
  });
});

router.get('/:id', (req, res) => {
  res.json({
    success: true,
    message: 'Single user fetched'
  });
});

module.exports = router;