exports.getTeamMembers = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Team members fetched successfully'
  });

};

exports.inviteMember = async (req, res) => {

  res.status(201).json({
    success: true,
    message: 'Team member invited successfully'
  });

};