const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Settings fetched'
  });
});

router.put('/update', (req, res) => {
  res.json({
    success: true,
    message: 'Settings updated'
  });
});

module.exports = router;