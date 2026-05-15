const Stripe = require('stripe');

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY
);

class StripeService {
  async createCustomer(data) {
    return await stripe.customers.create({
      email: data.email,
      name: data.name,
    });
  }

  async createCheckoutSession(data) {
    return await stripe.checkout.sessions.create({
      payment_method_types: ['card'],

      mode: 'subscription',

      customer: data.customerId,

      line_items: [
        {
          price: data.priceId,
          quantity: 1,
        },
      ],

      success_url:
        process.env.STRIPE_SUCCESS_URL,

      cancel_url:
        process.env.STRIPE_CANCEL_URL,
    });
  }

  async cancelSubscription(
    subscriptionId
  ) {
    return await stripe.subscriptions.cancel(
      subscriptionId
    );
  }

  async retrieveInvoice(invoiceId) {
    return await stripe.invoices.retrieve(
      invoiceId
    );
  }
}

module.exports = new StripeService();