exports.readAllUsers = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'List data of users'
  })
};


exports.readUser = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Detail user'
  })
};


exports.createUsers = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'User created successfully'
  })
};


exports.updateUsers = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'User update successfully'
  })
};


exports.deleteUsers = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Delete user successfully'
  })
};