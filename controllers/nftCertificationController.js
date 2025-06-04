// /controllers/nftCertificateController.js

import NftCertificate from "../models/NftCertification.js";

// Create a new NFT certificate
export const createNftCertificate = async (req, res) => {
  try {
    const { user, course, certificateUrl, txHash, walletAddress } = req.body;

    const newCertificate = new NftCertificate({
      user,
      course,
      certificateUrl,
      web3Interactions: {
        txHash,
        walletAddress,
      },
    });

    const savedCertificate = await newCertificate.save();
    res.status(201).json({
      message: "NFT certificate created",
      certificate: savedCertificate,
    });
  } catch (error) {
    console.error("Error creating NFT certificate:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all NFT certificates
export const getAllNftCertificates = async (req, res) => {
  try {
    const certificates = await NftCertificate.find()
      .populate("user")
      .populate("course")
      .sort({ createdAt: -1 });

    res.status(200).json({ certificates });
  } catch (error) {
    console.error("Error fetching NFT certificates:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single NFT certificate by ID
export const getNftCertificateById = async (req, res) => {
  try {
    const { id } = req.params;

    const certificate = await NftCertificate.findById(id)
      .populate("user")
      .populate("course");

    if (!certificate) {
      return res.status(404).json({ message: "NFT certificate not found" });
    }

    res.status(200).json({ certificate });
  } catch (error) {
    console.error("Error fetching NFT certificate:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update NFT certificate
export const updateNftCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    const { certificateUrl, txHash, walletAddress } = req.body;

    const updatedCertificate = await NftCertificate.findByIdAndUpdate(
      id,
      {
        certificateUrl,
        web3Interactions: { txHash, walletAddress },
      },
      { new: true }
    );

    if (!updatedCertificate) {
      return res.status(404).json({ message: "NFT certificate not found" });
    }

    res.status(200).json({
      message: "NFT certificate updated",
      certificate: updatedCertificate,
    });
  } catch (error) {
    console.error("Error updating NFT certificate:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete NFT certificate
export const deleteNftCertificate = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await NftCertificate.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "NFT certificate not found" });
    }

    res.status(200).json({ message: "NFT certificate deleted" });
  } catch (error) {
    console.error("Error deleting NFT certificate:", error);
    res.status(500).json({ message: "Server error" });
  }
};
