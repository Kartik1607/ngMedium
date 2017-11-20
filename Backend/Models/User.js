const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    favourites: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = userSchema;