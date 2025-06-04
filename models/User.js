import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  passwordHash: {
    type: String,
    required: true
  },

  walletAddress: {
    type: String,
    unique: true,
    sparse: true // allows multiple nulls
  },

  avatarUrl: {
    type: String
  },

  bio: {
    type: String
  },

  role: {
    type: String,
    enum: ['student', 'instructor', 'admin'],
    default: 'student'
  },

  // References
  discussionThreads: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DiscussionThread'
  }],

  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],

  nftCertificates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NftCertification'
  }],

  activityLogs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserActivityLog'
  }],

  courseProgress: [{
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'courses' },
    startedAt: Date,
    completedAt: Date,
    percentageCompleted: Number
  }],

  rewardTokens: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);
export default User;
