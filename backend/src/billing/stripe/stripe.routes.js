const express = require('express');

const router = express.Router();

const stripeController = require('./stripe.controller');

router.post(
  '/checkout',
  stripeController.createCheckout
);

router.post(
  '/cancel/:id',
  stripeController.cancelSubscription
);

module.exports = router;