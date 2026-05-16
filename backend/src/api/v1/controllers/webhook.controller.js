exports.whatsappWebhook = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'WhatsApp webhook received'
  });

};

exports.stripeWebhook = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Stripe webhook received'
  });

};