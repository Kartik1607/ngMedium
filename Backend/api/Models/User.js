const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    userName: String,
    password: String,
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    favourites: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});


userSchema.statics.findByUserName = function(userName, cb) {
    return this.find({userName: userName})
        .populate('posts')
        .populate('favourites')
        .exec(cb);
};

module.exports = {
    schema: userSchema
};