const mongoose = require('mongoose');
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
const updatePost = async (req,res) => {
    const {id : _id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message : 'No post with this id'})

    const updatePost = postMessage.findByIdAndUpdate(_id,post,{new : true})

    res.status(200).json(updatePost);
}
exports.getPosts = getPosts;
exports.createPost = createPost;
exports.updatePost = updatePost;