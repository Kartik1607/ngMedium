const Users = require('../Services/UserService');
const Posts = require('../Services/PostService');
const colors = require('colors');

module.exports = function(app) {
    app.get('/users/:id', (req, res) => {
        Users.findById(req.params.id, (err)=>{
            console.log(colors.red(err));
            res.send(err);
        }, (user)=>{
            res.send(user);
        });
    });

    app.get('/users/username/:username', (req, res) => {
        Users.findByUserName(req.params.username, (err)=>{
            console.log(colors.red(err));
            res.send(err);
        }, (user) => {
            res.send(user);
        });
    });

    app.put('/users/:userId/favourites/:postId', (req, res) => {
        Users.addFavourite(req.params.userId, req.params.postId,
            (err)=>{
                console.log(colors.red(err));
                res.send(err);
            }, (user) => {
                res.send(user);
            })
    });

    app.delete('/users/:userId/favourites/:postId', (req, res) => {
        Users.removeFavourite(req.params.userId, req.params.postId,
            (err)=>{
                console.log(colors.red(err));
                res.send(err);
            }, (user) => {
                res.send(user);
            })
    });

    app.put('/users/:userId/posts/:postId', (req, res) => {
        Users.addPost(req.params.userId, req.params.postId,
            (err)=>{
                console.log(colors.red(err));
                res.send(err);
            }, (user) => {
                res.send(user);
            })
    });

    app.delete('/users/:userId/posts/:postId', (req, res) => {
        Users.removePost(req.params.userId, req.params.postId,
            (err)=>{
                console.log(colors.red(err));
                res.send(err);
            }, (user) => {
                Posts.deletePost(req.params.postId, (err) => {
                    console.log(colors.red(err));
                    res.send(err);
                }, () => {
                    res.send(user);
                });
            })
    });

};
