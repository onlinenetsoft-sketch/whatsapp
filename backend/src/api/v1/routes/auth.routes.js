const express = require('express');

const router = express.Router();

router.post('/register', (req, res) => {
  res.json({
    success: true,
    message: 'User registered successfully'
  });
});

router.post('/login', (req, res) => {
  res.json({
    success: true,
    message: 'Login successful'
  });
});

router.post('/logout', (req, res) => {
  res.json({
    success: true,
    message: 'Logout successful'
  });
});

module.exports = router;