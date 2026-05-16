const express = require('express');

const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.json({
    success: true,
    message: 'Admin dashboard data'
  });
});

module.exports = router;