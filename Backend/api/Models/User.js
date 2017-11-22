const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    username: String,
    password: String,
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    favourites: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});


userSchema.statics.findByUserName = function(userName, cb) {
    return this.findOne({username: userName})
        .populate('posts')
        .populate('favourites')
        .exec(cb);
};

module.exports = {
    schema: userSchema
};