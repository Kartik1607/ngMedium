const mongoose = require('mongoose');
let postSchema = require('../Models/post').schema;

const PostModel = mongoose.model('Post', postSchema);

module.exports = {
    findPopular: function (limit, error, success)
    {
        if(limit === 0) {
            PostModel.find()
                .populate('user', 'name _id')
                .sort({totalFavourites: -1})
                .exec((err, posts) => {
                    if (err) {
                        error()
                    } else {
                        success(posts)
                    }
                })
        }else {
            PostModel.find()
                .populate('user', 'name _id')
                .sort({totalFavourites: -1})
                .limit(limit)
                .exec((err, posts) => {
                    if (err) {
                        error()
                    } else {
                        success(posts)
                    }
                })
        }
    },

    findById: function (id, error, success) {
        PostModel.findById(id)
            .populate('user', 'name _id')
            .exec((err, posts)=> {
                if (err) {
                    error(err)
                } else {
                    success(posts)
                }
            })
    },

    findByCategory: function findByCategory(category, limit, error, success) {

        PostModel.findByCategory(category, limit, (err, posts) => {
            if(err) {
                error(err);
            } else {
                success(posts)
            }
        })
    },

    save: function (model, error, success) {
        model._id = new mongoose.Types.ObjectId();
        let post = new PostModel(model);
        post.save((err, posts) => {
            if (err) {
                error(err)
            } else {
                success(posts)
            }
        })
    },

    updateById: function (id, model, error, success) {
        PostModel.findByIdAndUpdate(id, model)
            .populate('user', 'name _id')
            .exec((err, posts) => {
                if (err) {
                    error(err)
                } else {
                    success(posts)
                }
            })
    },

    findHomePosts: function (error, success) {
        let result = {};
        let found = 0;
        this.findPopular(4, (err)=>{}, (posts)=>{
            result['popular'] = posts;
            ++found;
            if(found === 4) { success(result) };
        });
        this.findByCategory('technology', 5, (err)=>{}, (posts)=>{
            result['technology'] = posts;
            ++found;
            if(found === 4) { success(result) };
        });
        this.findByCategory('creativity', 5, (err)=>{}, (posts)=>{
            result['creativity'] = posts;
            ++found;
            if(found === 4) { success(result) };
        });
        this.findByCategory('entrepreneurship', 5, (err)=>{}, (posts)=>{
            result['entrepreneurship'] = posts;
            ++found;
            if(found === 4) { success(result) };
        });
    },

    deletePost(postId, error, success) {
        PostModel.find({_id: postId}).remove().exec((err, post) => {
            if(err) {
                error(err);
            } else {
                success(post);
            }
        })
    },

    increaseRating(postId, error, success) {
        PostModel.findByIdAndUpdate(postId, {$inc : {totalFavourites: 1}})
            .exec((err, post) => {
                if(err) {
                    error(err);
                } else {
                    success(post);
                }
            })
    },

    decreaseRating(postId, error, success) {
        PostModel.findByIdAndUpdate(postId, {$inc : {totalFavourites: -1}})
            .exec((err, post) => {
                if(err) {
                    error(err);
                } else {
                    success(post);
                }
            })
    }
};
