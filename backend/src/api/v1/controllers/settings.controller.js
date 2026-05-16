exports.getSettings = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Settings fetched successfully'
  });

};

exports.updateSettings = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Settings updated successfully'
  });

};