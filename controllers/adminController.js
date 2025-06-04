import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import User from "../models/User.js";
import Comment from "../models/Comment.js";
import DiscussionThread from "../models/DiscussionThread.js";
import NftCertification from "../models/NftCertification.js";
import UserActivityLog from "../models/UserActivityLog.js";
import dotenv from "dotenv";

dotenv.config();

// Admin login to receive a token
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin || !(await bcrypt.compare(password, admin.passwordHash))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: admin._id }, process.env.ADMIN_SECRET_KEY, {
    expiresIn: "1d",
  });
  res.json({ token });
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(
      {},
      "fullName email role walletAddress rewardTokens createdAt"
    );
    res.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

// View all comments
export const getAllComments = async (req, res) => {
  const comments = await Comment.find().populate("user thread");
  res.json(comments);
};

// View all discussion threads
export const getAllThreads = async (req, res) => {
  const threads = await DiscussionThread.find().populate("user course");
  res.json(threads);
};

// View all user activities
export const getActivityLogs = async (req, res) => {
  const logs = await UserActivityLog.find().populate("user course");
  res.json(logs);
};

// View NFT certificates
export const getNftCertificates = async (req, res) => {
  const nfts = await NftCertification.find().populate("user course");
  res.json(nfts);
};

// Verify a certificate by tokenId or transactionHash
export const verifyCertificate = async (req, res) => {
  const { tokenId, transactionHash } = req.query;

  const cert = await NftCertification.findOne({
    ...(tokenId && { nftTokenId: tokenId }),
    ...(transactionHash && { transactionHash }),
  });

  if (!cert) {
    return res.status(404).json({ message: "Certificate not found" });
  }

  res.json({ verified: true, certificate: cert });
};

// Admin stats overview
export const getPlatformStats = async (req, res) => {
  const users = await User.countDocuments();
  const threads = await DiscussionThread.countDocuments();
  const comments = await Comment.countDocuments();
  const nfts = await NftCertification.countDocuments();
  const activities = await UserActivityLog.countDocuments();

  res.json({
    users,
    threads,
    comments,
    nftIssued: nfts,
    activities,
  });
};
