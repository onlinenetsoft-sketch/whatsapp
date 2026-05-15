const Subscription = require(
  './subscription.model'
);

class SubscriptionService {
  async createSubscription(data) {
    return await Subscription.create(data);
  }

  async getUserSubscription(userId) {
    return await Subscription.findOne({
      user: userId,
      status: 'ACTIVE',
    }).populate('plan');
  }

  async cancelSubscription(id) {
    return await Subscription.findByIdAndUpdate(
      id,
      {
        status: 'CANCELLED',
      },
      {
        new: true,
      }
    );
  }
}

module.exports =
  new SubscriptionService();