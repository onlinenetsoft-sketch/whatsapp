const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Team members fetched'
  });
});

router.post('/invite', (req, res) => {
  res.json({
    success: true,
    message: 'Team member invited'
  });
});

module.exports = router;