const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Posts = require('./post');
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

app.get('/posts/:category', (req, res) => {
    let limit = req.query.limit;
    if (limit === undefined || typeof limit !== 'number' ) {
        limit = 0;
    }
    Posts.findByCategory(req.params.category, limit, (err)=>{
        console.log(colors.red(err));
    }, (posts) => {
        res.send(posts);
    })
});

app.post('/posts', (req, res) => {
    Contact.save(req.body, (err) => {
        console.log(colors.red(err))
    }, (contact) => {
        res.send(contact)
  })
});


app.get('/posts/:id', (req, res) => {
    Posts.findById(req.params.id, (err) => {
        console.log(colors.red(err))
    }, (post) => {
        res.send(post)
    })
});