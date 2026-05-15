const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Workspace fetched'
  });
});

router.post('/create', (req, res) => {
  res.json({
    success: true,
    message: 'Workspace created'
  });
});

module.exports = router;