
const Post = require('../../models/post');
const fs = require("fs");

exports.addPost = async (id, data, files) => {
    let post = await Post.create({
        creator: id,
        created: new Date(),
        described: data.described,
        status: data.status,
        image: files
    })

    return post;
};

exports.editPost = async (id, data, files = undefined) => {
    let post = await Post.findById({_id: id})
    post.described = data.described
    post.modified = new Date()
    if(files){
        if( post.image.length !== 0){
            for(let i in post.image){
                if (fs.existsSync(post.image[i])){
                    fs.unlinkSync(post.image[i])
                }
            } 
        }
  
        post.image = files
    }
    post.save();

    return post;
};

exports.deletePost = async (id) => {
    let post = await Post.findById({_id: id})
        if( post.image.length !== 0){
            for(let i in post.image){
                if (fs.existsSync(post.image[i])){
                    fs.unlinkSync(post.image[i])
                }
            } 
        }
  

    post = await Post.findByIdAndDelete({_id: id})

    return {
        success: true,
    };
};

exports.getPost = async (id) => {
    let post = await Post.findById({_id: id})

    return post
};

exports.setComment = async (id, data) => {
    let post = await Post.findByIdAndUpdate(id, 
        { $push: { 
            comment: {
                creator: data.creator,
                described: data.described,
                createAt: new Date()
            }   
        },
    })

    post = await Post.findById({_id: id})
    return post
}

exports.getComment = async (id) => {
    let post = await Post.findById({_id: id})
                         .populate({path: "comment.creator", populate: "users", select: "name avatar"})
    return post
}


exports.likePost = async (userId, id) => {
    let post = await Post.findByIdAndUpdate(id, 
        { $push: { 
            like: {
                creator: userId,
                createAt: new Date()
            }   
        },
    })

    post = await Post.findById({_id: id})
    return post
}

exports.unlikePost = async (userId, id) => {
    let post = await Post.findByIdAndUpdate(id, 
        { $pull: 
            { 
                like: {
                    creator: userId
                }   
            },
        })

    post = await Post.findById({_id: id})
    return post
}

exports.reportPost = async (userId, id, description) => {
    let post = await Post.findByIdAndUpdate(id, 
        { $push: { 
            reported: {
                creator: userId,
                createAt: new Date(),
                description: description
            }   
        },
    })

    post = await Post.findById({_id: id})
    return post
}