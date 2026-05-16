const express = require('express');

const router = express.Router();

router.post('/send', (req, res) => {
  res.json({
    success: true,
    message: 'Message sent successfully'
  });
});

router.get('/history', (req, res) => {
  res.json({
    success: true,
    message: 'Message history fetched'
  });
});

module.exports = router;