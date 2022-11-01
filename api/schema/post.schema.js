const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  desc: {
    type: String,
    required: true,
  },
});
const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    desc: {
      type: String,
      max: 500,
    },
    postImage: {
      type: Array,
    },
    likes: {
      type: Array,
      default: [],
    },
    comment: [commentSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = postSchema;
