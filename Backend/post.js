const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    title: String,
    content: String,
    category: String,
    contentDetail: String,
    author: String,
    date: { type: Date, default: Date.now },
    timeToRead: String,
    totalRatings: Number,
    ratingSum: Number,
    ratingAverage: Number,
    image: String
});

postSchema.statics.findByCategory = function(category, lim, cb) {
    if(lim === 0) {
        return this.find({ category: category }, cb);
    } else {
        return this.find({category: category}, cb).limit(lim);
    }
};

const PostModel = mongoose.model('Post', postSchema);

function findAll(error, success) {
    PostModel.find((err, posts) => {
        if (err) {
            error()
        } else {
        success(posts)
        }
    })
}

function findById(id, error, success) {
    PostModel.findById(id, (err, posts) => {
        if (err) {
            error(err)
        } else {
            success(posts)
        }
    })
}

function findByCategory(category, limit, error, success) {
    PostModel.findByCategory(category, limit, (err, posts) => {
        if(err) {
            error(err);
        } else {
            success(posts)
        }
    })
}

function save(model, error, success) {
    let post = new PostModel(model)
    post.save((err, posts) => {
        if (err) {
            error(err)
        } else {
            success(posts)
        }
    })
}

function updateById(id, model, error, success) {
    PostModel.findByIdAndUpdate(id, model, (err, posts) => {
        if (err) {
            error(err)
        } else {
            success(posts)
        }
    })
}

module.exports = {
    findAll: findAll,
    save: save,
    findById: findById,
    updateById: updateById,
    findByCategory: findByCategory
};
