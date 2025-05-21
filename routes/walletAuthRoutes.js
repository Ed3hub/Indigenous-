// const express = require("express");
// const Web3 = require("web3");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();
// const web3 = new Web3(); // Initialize Web3

// // Login with Wallet
// router.post("/wallet/login", async (req, res) => {
//   const { address, signature, message } = req.body;

//   const recoveredAddress = web3.eth.accounts.recover(message, signature);
//   if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
//     return res.status(400).json({ message: "Invalid signature" });
//   }

//   let user = await User.findOne({ walletAddress: address });
//   if (!user) {
//     user = new User({ walletAddress: address });
//     await user.save();
//   }

//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//   res.json({ token });
// });

// // Link Wallet to Profile
// router.post("/wallet/link", async (req, res) => {
//   const { userId, walletAddress } = req.body;
//   const user = await User.findById(userId);
//   if (!user) return res.status(404).json({ message: "User not found" });

//   user.walletAddress = walletAddress;
//   await user.save();
//   res.json({ message: "Wallet linked successfully" });
// });

// module.exports = router;
