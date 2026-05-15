exports.getLeads = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'CRM leads fetched successfully'
  });

};

exports.createLead = async (req, res) => {

  res.status(201).json({
    success: true,
    message: 'Lead created successfully'
  });

};