const multer = require('multer');
const Storage = require('@google-cloud/storage');
const bucketName = 'medium-images';
const cloudStorage = new Storage();

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
        cloudStorage
            .bucket(bucketName)
            .upload(req.file.path)
            .then(()=>{
                cloudStorage.bucket(bucketName)
                    .file(req.file.filename)
                    .makePublic()
                    .then(() => {
                        console.log(`uploaded to ${bucketName}.`);
                        res.send(`https://storage.googleapis.com/${bucketName}/${req.file.filename}`);
                    })
                    .catch(err => {
                        console.error('ERROR:', err);
                        res.send(err);
                    });
            });


    });
};
