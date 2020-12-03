const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    creator: {
        type: String
    },
    content: {
        type: String,
    },
    media: {
        type: String,
    },
    comment: [{
       creator: {
           type: String,
           ref: "users"
       },
       content: {
           type: String
       },
       createAt: {
           type: Date
       } 
    }],
    like: [{
        type: String,
        ref: "users"
    }],
    createAt: {
        type: Date
    }, 
})

module.exports = mongoose.model('posts', PostSchema);