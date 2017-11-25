/** Utilities **/
const constants = require('./constants');
const colors = require('colors/safe');
const path = require('path');
/** Database **/
const mongoose = require('mongoose');
/** Server **/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
/** Authentication **/
const session = require('express-session');
const cookieParser = require('cookie-parser');
/** CLOUDINARY **/
require('./config/cloudinary');
/** DB OPERATION **/
mongoose.connect(constants.mongoURL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, colors.red('connection error:')));
db.once('open', () => {
    console.log(colors.green('Connceted to MongoDB. YAY'))
});


/** EXPRESS MIDDLEWARE AND SETUP **/
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: "Scooby Doo"}));
require('./config/passport')(app);
app.use('/api', require('./api/apiRoute'));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(constants.PORT, () => {
    console.log(colors.green('Node started'))
});