const express = require('express');

const router = express.Router();

router.post('/subscribe', (req, res) => {
  res.json({
    success: true,
    message: 'Subscription created'
  });
});

router.get('/invoices', (req, res) => {
  res.json({
    success: true,
    message: 'Invoices fetched'
  });
});

module.exports = router;