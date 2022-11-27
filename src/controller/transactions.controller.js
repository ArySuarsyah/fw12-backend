const transactionsModel = require('../models/transactions.model');




exports.readAllTransactions = (request, response) => {
transactionsModel.readAllTransactions((err, data) => {  // ???
    if (err) {
      return response.status(500).json({
        success: false,
        message: "Access failed"
      })
    } else {
      return response.status(200).json({
        success: true,
        message: "Access success",
        data : data
      })
    }
  });
};




exports.readTransactions = (request, response) => {
  transactionsModel.readTransactions((request.params), (err, data) => {
    if (err) {
      return response.status(500).json({
        success: false,
        message: "Access failed"
      })
    } else {
      return response.status(200).json({
        success: true,
        message: 'Access success',
        data: data.rows[0]
      })
    }
  })
}


exports.createTransactions = (req, res) => {
  transactionsModel.createTransactions(req.body, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: 'Access failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'user created successfully',
        result: data.rows[0]
      })
    }
  })
  }


exports.updateTransactions = (req, res) => {
  transactionsModel.updateTransactions(req, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: 'Something wrong'
      })
    } else {
      return res.status(200).json({
      success: true,
      message: 'user created successfully',
      result: data.rows[0]
    })
    }
  })
}


exports.deleteTransactions = (req, res) => {
  transactionsModel.deleteTransactions(req, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Something wrong'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'User Deleted',
        result: data.rows[0]
      })
    }
  })
}
