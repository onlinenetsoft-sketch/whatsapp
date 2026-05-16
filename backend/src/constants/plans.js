module.exports = {
  FREE: {
    name: 'Free',

    price: 0,

    contactsLimit: 100,

    messagesPerMonth: 1000,

    features: [
      'Basic Dashboard',
      'Limited Messaging',
      'Community Support',
    ],
  },

  STARTER: {
    name: 'Starter',

    price: 29,

    contactsLimit: 5000,

    messagesPerMonth: 50000,

    features: [
      'Team Access',
      'Broadcast Messaging',
      'Analytics',
    ],
  },

  PROFESSIONAL: {
    name: 'Professional',

    price: 99,

    contactsLimit: 50000,

    messagesPerMonth: 500000,

    features: [
      'Advanced Analytics',
      'API Access',
      'Priority Support',
    ],
  },

  ENTERPRISE: {
    name: 'Enterprise',

    price: 299,

    contactsLimit: 'Unlimited',

    messagesPerMonth: 'Unlimited',

    features: [
      'Dedicated Support',
      'Custom Integrations',
      'Advanced Security',
    ],
  },
};