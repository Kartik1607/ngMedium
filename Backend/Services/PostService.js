let postSchema = require('../Models/post').schema;

const PostModel = mongoose.model('Post', postSchema);

function findPopular(limit, error, success) {
    if(limit === 0) {
        PostModel.find()
            .sort({totalClaps: -1})
            .exec((err, posts) => {
                if (err) {
                    error()
                } else {
                    success(posts)
                }
            })
    }else {
        PostModel.find()
            .sort({totalClaps: -1})
            .limit(limit)
            .exec((err, posts) => {
                if (err) {
                    error()
                } else {
                    success(posts)
                }
            })
    }
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

function findHomePosts(error, success) {
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
}