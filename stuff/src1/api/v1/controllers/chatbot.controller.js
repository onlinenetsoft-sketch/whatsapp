exports.createFlow = async (req, res) => {

  res.status(201).json({
    success: true,
    message: 'Chatbot flow created successfully'
  });

};

exports.getFlows = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Chatbot flows fetched successfully'
  });

};