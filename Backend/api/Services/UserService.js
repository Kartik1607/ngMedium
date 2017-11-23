const userSchema = require('../Models/User').schema;
const mongoose = require('mongoose');

const UserModel = mongoose.model('User', userSchema);

module.exports = {
    findById: function (id, error, success) {
        UserModel.findById(id)
            .populate('posts')
            .populate('favourites')
            .exec((err, posts)=> {
                if (err) {
                    error(err)
                } else {
                    success(posts)
                }
            })
    },

    findByUserName: function (userName, error, success) {
        UserModel.findByUserName(userName, (err, user) => {
            if(err) {
                error(err);
            } else {
                success(user);
            }
        })
    },

    save: function (model, error, success) {
        this.findByUserName(model.username, (err)=>{}, (userFind)=>{
           if(userFind) {
               error({data:"User Already Exists"});
               return;
           }
           model._id = new mongoose.Types.ObjectId();
           let user = new UserModel(model);
           user.save((errSave, userNew) => {
               if (errSave) {
                   error(errSave)
               } else {
                   success(userNew)
               }
            });
        });
    },

    addPost: function(userId, postId, error, success) {
        console.log("IN" + userId + " " + postId);
        UserModel.findByIdAndUpdate(userId, { $addToSet: { posts: postId }},
            { new: true })
            .populate('posts')
            .populate('favourites')
            .exec(function (err, user) {
                if (err){
                    error(err);
                } else {
                    success(user);
                }
            });
    },

    addFavourite: function(userId, postId, error, success) {
        UserModel.findByIdAndUpdate(userId, { $addToSet: { favourites: postId }},
            { new: true })
            .populate('posts')
            .populate('favourites')
            .exec(function (err, user) {
                if (err){
                    error(err);
                } else {
                    success(user);
                }
            });
    },

    removePost: function(userId, postId, error, success) {
        UserModel.findByIdAndUpdate(userId,{ $pull: { posts: postId}},
            {new: true})
            .populate('posts')
            .populate('favourites')
            .exec(function(err, user) {
                if(err) {
                    error(err);
                } else {
                    success(user);
                }
            });
    },

    removeFavourite: function(userId, postId, error, success) {
        UserModel.findByIdAndUpdate(userId,{ $pull: { favourites: postId}},
            {new: true})
            .populate('posts')
            .populate('favourites')
            .exec(function(err, user) {
                if(err) {
                    error(err);
                } else {
                    success(user);
                }
            });
    },
};
