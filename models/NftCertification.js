const mongoose = require('mongoose');

const NftCertificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'courses', required: true },
  nftTokenId: { type: String, required: true, unique: true },
  transactionHash: { type: String, required: true, unique: true },
  blockchain: { type: String, required: true, enum: ['Ethereum', 'Polygon', 'Solana'] },
  issuedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('NftCertification', NftCertificationSchema);
