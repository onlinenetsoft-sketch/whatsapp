const validateLead = (req, res, next) => {

  const { name, phone } = req.body;

  if (!name || !phone) {

    return res.status(400).json({
      success: false,
      message: 'Lead name and phone are required'
    });

  }

  next();
};

module.exports = {
  validateLead
};