const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    content: String,
    category: String,
    contentDetail: String,
    date: { type: Date, default: Date.now },
    timeToRead: String,
    totalClaps: Number,
    image: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

postSchema.statics.findByCategory = function(category, lim, cb) {
    if(lim === 0) {
        return this.find({ category: category })
            .populate('user','_id name')
            .exec(cb);
    } else {
        return this.find({category: category}).limit(lim)
            .populate('user', '_id name')
            .exec(cb);
    }
};

module.exports = {
    schema: postSchema
};
