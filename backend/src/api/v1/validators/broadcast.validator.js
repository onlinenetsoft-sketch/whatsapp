const validateBroadcast = (req, res, next) => {

  const { name, contacts } = req.body;

  if (!name || !contacts) {

    return res.status(400).json({
      success: false,
      message: 'Broadcast name and contacts are required'
    });

  }

  next();
};

module.exports = {
  validateBroadcast
};