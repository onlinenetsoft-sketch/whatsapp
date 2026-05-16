exports.getWorkspace = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Workspace fetched successfully'
  });

};

exports.createWorkspace = async (req, res) => {

  res.status(201).json({
    success: true,
    message: 'Workspace created successfully'
  });

};