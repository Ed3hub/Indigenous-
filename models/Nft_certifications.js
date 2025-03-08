const mongoose = require('mongoose');

const NFTCertificateSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true }, // Who received the certificate
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }, // Course for which certificate was issued
  tokenId: { type: String, required: true, unique: true, index: true }, // Unique NFT token ID
  contractAddress: { type: String, required: true }, // Smart contract address for NFTs
  issueDate: { type: Date, default: Date.now }, // Date of certificate issuance
  metadata: {
    image: { type: String, required: true }, // URL to NFT image of the certificate
    certificateHash: { type: String, required: true, unique: true }, // Hash of the certificate stored on-chain
    attributes: [
      { trait_type: "Completion Status", value: "Completed" },
      { trait_type: "Grade", value: "A" }
    ]
  }
});

const NFTCertificate = mongoose.model('NFTCertificate', NFTCertificateSchema);
module.exports = NFTCertificate;
