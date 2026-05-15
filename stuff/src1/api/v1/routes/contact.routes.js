const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Contacts fetched'
  });
});

router.post('/create', (req, res) => {
  res.json({
    success: true,
    message: 'Contact created'
  });
});

module.exports = router;