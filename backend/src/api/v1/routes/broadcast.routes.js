const express = require('express');

const router = express.Router();

router.post('/create', (req, res) => {
  res.json({
    success: true,
    message: 'Broadcast campaign created'
  });
});

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Broadcast campaigns fetched'
  });
});

module.exports = router;