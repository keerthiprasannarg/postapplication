const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  post_title: { type: String, required: true },
  post_description: String,
});

module.exports = mongoose.model("posts", postSchema, "posts");
