const express = require('express');
const Stripe = require('stripe');

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post(
  '/',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const sig = req.headers['stripe-signature'];

    try {
      const event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );

      switch (event.type) {
        case 'invoice.payment_succeeded':
          console.log('✅ Payment succeeded');
          break;

        case 'customer.subscription.deleted':
          console.log('❌ Subscription cancelled');
          break;

        default:
          console.log(`Unhandled event type ${event.type}`);
      }

      res.json({ received: true });
    } catch (error) {
      console.error(error.message);

      res.status(400).send(`Webhook Error: ${error.message}`);
    }
  }
);

module.exports = router;