const errorHandler = (err, res) => {
  if (err.message.includes('unique constraint "email"')) {
    return res.status(400).json({
      success: false,
      message: 'Email already exists'
    })
  } else if (err.message.includes('duplicate key value violates unique constraint "name"')) {
    return res.status(400).json({
      success: false,
      message: 'Genre already exists'
    })
  }
  return res.status(500).json({
    success: false,
    message: 'something wrong'
  })
}

module.exports = errorHandler