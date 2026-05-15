const validateTemplate = (req, res, next) => {

  const { name, content } = req.body;

  if (!name || !content) {

    return res.status(400).json({
      success: false,
      message: 'Template name and content are required'
    });

  }

  next();
};

module.exports = {
  validateTemplate
};