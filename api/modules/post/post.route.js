const express = require('express');
const router = express.Router();
const postController = require('./post.controller');
const {auth, uploadFile } = require('../../middleware/index');
const post = require('../../models/post');

router.post("/add-post", auth, uploadFile([{name:'post', path:'/posts'}], 'array') , postController.addPost)
router.patch("/edit-post/:id", auth, uploadFile([{name:'post', path:'/posts'}], 'array') , postController.editPost)
router.delete("/delete-post/:id", postController.deletePost)
router.get("/get-post/:id", postController.getPost)

router.post("/set-comment/:id", postController.setComment)
router.get("/get-comment/:id", postController.getComment)

router.post("/like-post/:id", auth, postController.likePost)

module.exports = router;