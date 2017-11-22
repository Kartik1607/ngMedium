const Posts = require('../Services/PostService');
const colors = require('colors');
const constants = require('../../constants');

module.exports = function(app) {
    app.get('/category/:category', (req, res) => {
        let limit = req.query.limit;
        try {
            limit = + limit;
        } catch (e) {
            limit = 0;
        }
        if(req.params.category === 'popular'){
            Posts.findPopular(0, (err)=>{console.log(colors.red(err))}, (posts)=> {res.send(posts)});
            return;
        }

        Posts.findByCategory(req.params.category, limit, (err)=>{
            console.log(colors.red(err));
            res.send(err);
        }, (posts) => {
            res.send(posts);
        })
    });

    app.post('/posts', (req, res) => {
        let post = req.body;
        post.timeToRead = constants.getTimeToRead(post.content);
        Posts.save(post, (err) => {
            console.log(colors.red(err));
            res.send(err);
        }, (contact) => {
            res.send(contact)
        })
    });


    app.get('/posts/:id', (req, res) => {
        Posts.findById(req.params.id, (err) => {
            console.log(colors.red(err));
            res.send(err);
        }, (post) => {
            res.send(post)
        })
    });

    app.get('/posts', (req, res) => {
        Posts.findHomePosts((err)=>{
            console.log(colors.red(err));
            res.send(err);
        }, (posts)=> {
            res.send(posts);
        })
    });
};
