const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  thread: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "discussion_threads",
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  content: { type: String, required: true },
  web3Interactions: {
    txHash: { type: String },
    walletAddress: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
