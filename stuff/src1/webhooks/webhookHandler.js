const express = require('express');

const whatsappWebhook = require('./whatsapp.webhook');
const stripeWebhook = require('./stripe.webhook');
const metaWebhook = require('./meta.webhook');

const router = express.Router();

router.use('/whatsapp', whatsappWebhook);
router.use('/stripe', stripeWebhook);
router.use('/meta', metaWebhook);

module.exports = router;