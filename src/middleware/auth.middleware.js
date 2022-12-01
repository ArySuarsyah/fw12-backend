const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, netx) => {
  const authorization = req.headers.authorization
  if (authorization && authorization.startsWith('Bearer ')) {
    const token = authorization.slice(7)
    try {
      const payload = jwt.verify(token, 'Secret-key')
      req.usersData = payload
      netx()
    } catch (err) {
      console.log(err);
      return res.status(401).json({
        succes: false,
        message: err.message
      })
    }
  } else {
    return res.status(401).json({
      succes: false,
      message: 'Unauthorized'
    });
  }
};

module.exports = authMiddleware