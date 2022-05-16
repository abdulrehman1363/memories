const postMessage = require('../models/postMessage');

const getPosts = async (req,res) => {
    try {
        postMessages = await postMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
const createPost = async (req,res) => {
    const post = req.body;
    const newPost = new postMessage(post);
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}
exports.getPosts = getPosts;
exports.createPost = createPost;