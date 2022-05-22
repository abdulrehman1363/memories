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

    const updatePost = await postMessage.findByIdAndUpdate(_id,post,{new : true})

    res.status(200).json(updatePost);
}
const deletePost = async (req,res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message : 'No post with this id'})
    await postMessage.findByIdAndDelete(id);
    console.log('DELETED')

    res.status(200).json({message : 'Post Deleted Successfully'})

}
const likePost = async (req,res) => {
    const { id } = req.params;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message : 'No post with this id'})
    
        const post = await postMessage.findById(id);
        const likeCount = post.likeCount+1;

        const updatedPost = await postMessage.findByIdAndUpdate(id,{likeCount}, {new : true});

        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(404).json({message : 'Error while liking post'})
    }

    


}

exports.getPosts = getPosts;
exports.createPost = createPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
exports.likePost = likePost;