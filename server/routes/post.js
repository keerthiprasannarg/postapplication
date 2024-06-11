const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const createPost = async (req, res) => {
  const addPost = new Post(req.body).save();
  res.status(200).json({ message: "Post added successfully", data: addPost });
};

const readPosts = async (req, res) => {
  const { user_id } = req.params;
  console.log("user_id: ", user_id);
  const posts = await Post.find({ user_id });
  res.status(200).json(posts);
};
const updatePost = async (req, res) => {
  const { id } = req.params;
  const ediitingPost = req.body;
  const ediitedPost = await Post.findByIdAndUpdate(id, ediitingPost);
  const latestPost = await Post.findById(id);
  res
    .status(200)
    .json({ message: "Post updated successfully", data: latestPost });
};
const deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  res.status(200).json({ message: "Post deleted successfully" });
};
router.get("/get-posts/:user_id", readPosts);
router.post("/add-post", createPost);
router.put("/update-post/:id", updatePost);
router.delete("/delete-post/:id", deletePost);

module.exports = router;
