const express = require('express');

const router = express.Router();

router.post('/whatsapp', (req, res) => {
  res.status(200).send('WhatsApp webhook received');
});

router.post('/stripe', (req, res) => {
  res.status(200).send('Stripe webhook received');
});

module.exports = router;