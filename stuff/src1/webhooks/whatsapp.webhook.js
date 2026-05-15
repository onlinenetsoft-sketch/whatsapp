const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN;

  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('✅ WhatsApp Webhook Verified');

    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;

    console.log(
      '📩 WhatsApp Webhook Event:',
      JSON.stringify(body, null, 2)
    );

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;