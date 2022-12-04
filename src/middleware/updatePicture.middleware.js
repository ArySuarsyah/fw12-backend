const multer = require('multer');
const errorHandler = require('../helper/errorHandler.helper');


const storage = multer.diskStorage({
  destination: (req, file, call) => {
    call(null, 'picture')
  },
  filename: (req, file, call) => {
    const extension = file.originalname.split('.');
    const ext = extension[extension.length - 1];

    const name = `${new Date().getTime()}_${new Date().getTime()}.${ext}`
    call(null, name)
  }
});


const upload = multer({ storage, });

const uploadMiddleware = upload.single("picture");


module.exports = (req, res, next) => {
  uploadMiddleware(req, res, (err) => {
    if (err) {
      return errorHandler(err, res)
    }
    next()
  })
}