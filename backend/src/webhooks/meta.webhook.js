const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log(
      '📘 Meta Webhook:',
      JSON.stringify(req.body, null, 2)
    );

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;