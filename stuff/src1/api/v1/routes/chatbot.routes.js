const express = require('express');

const router = express.Router();

router.post('/flow/create', (req, res) => {
  res.json({
    success: true,
    message: 'Chatbot flow created'
  });
});

router.get('/flows', (req, res) => {
  res.json({
    success: true,
    message: 'Chatbot flows fetched'
  });
});

module.exports = router;