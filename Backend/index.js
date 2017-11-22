const express = require('express');
const app = express();
const mongoose = require('mongoose');
const constants = require('./constants');
const colors = require('colors/safe');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const api = require('./api/apiRoute');

mongoose.connect(constants.mongoURL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, colors.red('connection error:')));
db.once('open', () => {
    console.log(colors.green('Connceted to MongoDB. YAY'))
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', require('./api/apiRoute'));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(constants.PORT, () => {
    console.log(colors.green('Node started'))
});
