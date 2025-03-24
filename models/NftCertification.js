import mongoose from "mongoose";

const NftCertificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "courses",
    required: true,
  },
  nftTokenId: { type: String, required: true, unique: true },
  transactionHash: { type: String, required: true, unique: true },
  blockchain: {
    type: String,
    required: true,
    enum: ["Ethereum", "Polygon", "Solana"],
  },
  issuedAt: { type: Date, default: Date.now },
});

const NftCertification = mongoose.model(
  "NftCertification",
  NftCertificationSchema
);

export default NftCertification;
