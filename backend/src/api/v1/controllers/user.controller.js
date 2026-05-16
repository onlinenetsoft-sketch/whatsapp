exports.getUsers = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Users fetched successfully'
  });

};

exports.getUser = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Single user fetched successfully'
  });

};