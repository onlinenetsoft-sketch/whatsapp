const validateChatbotFlow = (req, res, next) => {

  const { name, nodes } = req.body;

  if (!name || !nodes) {

    return res.status(400).json({
      success: false,
      message: 'Flow name and nodes are required'
    });

  }

  next();
};

module.exports = {
  validateChatbotFlow
};