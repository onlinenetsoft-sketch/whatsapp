exports.sendMessage = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Message sent successfully'
  });

};

exports.getMessages = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Messages fetched successfully'
  });

};