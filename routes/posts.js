const express = require("express");
const postsController = require('../controllers/posts')

const router = express.Router();

router.get('/',postsController.getPosts);
router.post('/',postsController.createPost);
router.patch('/:id',postsController.updatePost)
module.exports = router;