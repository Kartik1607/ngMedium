const express = require('express');
const app = express();
const mongoose = require('mongoose');
const constants = require('./constants');
const colors = require('colors/safe');
const bodyParser = require('body-parser');
const imageService = require('./imageService');
imageService(app);

mongoose.connect(constants.mongoURL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, colors.red('connection error:')));
db.once('open', () => {
    console.log(colors.green('Connceted to MongoDB. YAY'))
});

app.use(bodyParser.json());
app.listen(constants.PORT, () => {
    console.log(colors.green('Node started'))
});

const postController = require('./RestControllers/PostController')(app);
const userController = require('./RestControllers/UserController')(app);