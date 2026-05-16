exports.createBroadcast = async (req, res) => {

  res.status(201).json({
    success: true,
    message: 'Broadcast created successfully'
  });

};

exports.getBroadcasts = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Broadcasts fetched successfully'
  });

};