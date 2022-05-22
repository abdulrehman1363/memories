const express = require("express");
const postsController = require('../controllers/posts')

const router = express.Router();

router.get('/',postsController.getPosts);
router.post('/',postsController.createPost);
router.patch('/:id',postsController.updatePost)
router.delete('/:id', postsController.deletePost)
router.patch('/:id/likePost', postsController.likePost)

module.exports = router;