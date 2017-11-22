const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage })

module.exports = function (app) {
  app.post('/upload', upload.single('avatar'), function (req, res) {
    res.send(req.file)
  });
};
