const validateMessage = (req, res, next) => {

  const { phone, message } = req.body;

  if (!phone || !message) {

    return res.status(400).json({
      success: false,
      message: 'Phone and message are required'
    });

  }

  next();
};

module.exports = {
  validateMessage
};