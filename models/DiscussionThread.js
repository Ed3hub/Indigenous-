const mongoose = require('mongoose');


const DiscussionThreadSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'courses', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  web3Interactions: { 
    txHash: { type: String },
    walletAddress: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('DiscussionThread', DiscussionThreadSchema);
