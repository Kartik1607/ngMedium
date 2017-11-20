const Users = require('../Services/UserService');
const colors = require('colors');

module.exports = function(app) {
    app.get('/users/:id', (req, res) => {
        Users.findById(req.params.id, (err)=>{
            colors.red(err);
            res.send(err);
        }, (user)=>{
            res.send(user);
        });
    });

    app.get('/users/userName/:userName', (req, res) => {
        Users.findByUserName(req.params.userName, (err)=>{
            colors.red(err);
            res.send(err);
        }, (user) => {
            res.send(user);
        });
    });

    app.post('/users', (req,res) => {
        Users.save(req.body, (err) => {
            colors.red(err);
            res.send(err);
        }, (user) => {
            res.send(user);
        } )
    });

    app.patch('/users/:userId/favourites/:postId', (req, res) => {
        Users.addFavourite(req.params.userId, req.params.postId,
            (err)=>{
                colors.red(err);
                res.send(err);
            }, (user) => {
                res.send(user);
            })
    });

    app.delete('/users/:userId/favourites/:postId', (req, res) => {
        Users.removeFavourite(req.params.userId, req.params.postId,
            (err)=>{
                colors.red(err);
                res.send(err);
            }, (user) => {
                res.send(user);
            })
    });

    app.patch('/users/:userId/posts/:postId', (req, res) => {
        Users.addPost(req.params.userId, req.params.postId,
            (err)=>{
                colors.red(err);
                res.send(err);
            }, (user) => {
                res.send(user);
            })
    });

    app.delete('/users/:userId/posts/:postId', (req, res) => {
        Users.removePost(req.params.userId, req.params.postId,
            (err)=>{
                colors.red(err);
                res.send(err);
            }, (user) => {
                res.send(user);
            })
    });
};