// const mongoose = require("mongoose");
import mongoose from "mongoose";
const UserActivityLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  activityType: {
    type: String,
    required: true,
    enum: [
      "course_started",
      "course_completed",
      "discussion_posted",
      "comment_added",
      "nft_minted",
    ],
  },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "courses" },
  details: { type: mongoose.Schema.Types.Mixed },
  tokenReward: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const UserActivityLog = mongoose.model(
  "UserActivityLog",
  UserActivityLogSchema
);
export default UserActivityLog;
