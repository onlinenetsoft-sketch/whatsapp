exports.register = async (req, res) => {
  try {

    res.status(201).json({
      success: true,
      message: 'User registered successfully'
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.login = async (req, res) => {
  try {

    res.status(200).json({
      success: true,
      message: 'Login successful'
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.logout = async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Logout successful'
  });
};