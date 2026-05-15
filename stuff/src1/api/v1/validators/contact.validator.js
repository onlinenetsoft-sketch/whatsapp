const validateContact = (req, res, next) => {

  const { name, phone } = req.body;

  if (!name || !phone) {

    return res.status(400).json({
      success: false,
      message: 'Name and phone are required'
    });

  }

  next();
};

module.exports = {
  validateContact
};