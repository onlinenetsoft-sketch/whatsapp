import Stripe from 'stripe';
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  export class BillingService {
    async createCustomer(data) {
      return stripe.customers.create(data);
    }
    async createSubscription(customerId, priceId) {
      return stripe.subscriptions.create({
        customer: customerId,
        items: [
          {
            price: priceId
} ]
});
  }
}