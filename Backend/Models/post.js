const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    title: String,
    content: String,
    category: String,
    contentDetail: String,
    date: { type: Date, default: Date.now },
    timeToRead: String,
    totalClaps: Number,
    image: String,
    userId: String
});

postSchema.statics.findByCategory = function(category, lim, cb) {
    if(lim === 0) {
        return this.find({ category: category }, cb);
    } else {
        return this.find({category: category}, cb).limit(lim);
    }
};

module.exports = {
    schema: postSchema
};
