exports.createSubscription = async (req, res) => {

  res.status(201).json({
    success: true,
    message: 'Subscription created successfully'
  });

};

exports.getInvoices = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Invoices fetched successfully'
  });

};