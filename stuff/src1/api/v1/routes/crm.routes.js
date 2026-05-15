const express = require('express');

const router = express.Router();

router.get('/leads', (req, res) => {
  res.json({
    success: true,
    message: 'CRM leads fetched'
  });
});

router.post('/lead/create', (req, res) => {
  res.json({
    success: true,
    message: 'Lead created'
  });
});

module.exports = router;