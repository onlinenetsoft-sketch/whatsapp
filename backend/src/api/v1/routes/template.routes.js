const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Templates fetched'
  });
});

router.post('/create', (req, res) => {
  res.json({
    success: true,
    message: 'Template created'
  });
});

module.exports = router;