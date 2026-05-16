exports.getTemplates = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Templates fetched successfully'
  });

};

exports.createTemplate = async (req, res) => {

  res.status(201).json({
    success: true,
    message: 'Template created successfully'
  });

};