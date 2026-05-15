exports.getContacts = async (req, res) => {

  res.status(200).json({
    success: true,
    message: 'Contacts fetched successfully'
  });

};

exports.createContact = async (req, res) => {

  res.status(201).json({
    success: true,
    message: 'Contact created successfully'
  });

};