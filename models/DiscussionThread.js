import mongoose from "mongoose";

const DiscussionThreadSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "courses",
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  web3Interactions: {
    txHash: { type: String },
    walletAddress: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
});

const DiscussionThread = mongoose.model(
  "DiscussionThread",
  DiscussionThreadSchema
);

export default DiscussionThread;
