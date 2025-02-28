const NftCertification = require('../models/NftCertification');

exports.getAllCertifications = async (req, res) => {
  try {
    const certifications = await NftCertification.find().populate('user course');
    res.json(certifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCertification = async (req, res) => {
  try {
    const { user, course, nftTokenId, transactionHash, blockchain } = req.body;
    const newCert = new NftCertification({ user, course, nftTokenId, transactionHash, blockchain });
    await newCert.save();
    res.status(201).json(newCert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
