const multer = require('multer');
const cloudinary = require('cloudinary');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });


module.exports = function (app) {
    app.post('/upload', upload.single('avatar'), function (req, res) {
        cloudinary.uploader.upload(req.file.path, (result) => {
            res.send({filename:result.url});
        });
    });
};
