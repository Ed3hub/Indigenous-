import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  certificate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NFTCertificate",
    required: true,
  },
  from: { type: String, required: true }, // Usually null or 'Platform' for first minting
  to: { type: String, required: true }, // Student’s wallet address
  transactionHash: { type: String, required: true, unique: true }, // Blockchain transaction hash
  timestamp: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
