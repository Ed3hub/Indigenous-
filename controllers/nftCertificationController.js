

const NFTCertificate = require('../models/NFTCertificate');
const Student = require('../models/Student');
const Transaction = require('../models/Transaction');
const Course = require('../models/Course');

// Get all NFT certificates of a specific student
const getStudentCertificates = async (req, res) => {
  try {
    const { studentId } = req.params;
    
    // Find all certificates issued to the student
    const certificates = await NFTCertificate.find({ student: studentId }).populate('course', 'title');
    
    if (!certificates.length) {
      return res.status(404).json({ message: "No NFT certificates found for this student." });
    }

    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Issue and Store NFT Certificate
const issueNFTCertificate = async (req, res) => {
  try {
    const { studentId, courseId, ipfsMetadataURI, blockchain, transactionHash } = req.body;

    // Check if student exists
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found." });
    }

    // Check if the student has already received an NFT for this course
    const existingCertificate = await NFTCertificate.findOne({ student: studentId, course: courseId });
    if (existingCertificate) {
      return res.status(400).json({ message: "NFT certificate already issued for this course." });
    }

    // Create a new NFT certificate entry
    const newCertificate = new NFTCertificate({
      student: studentId,
      course: courseId,
      issuedAt: new Date(),
      blockchain,
      transactionHash,
      metadata: {
        image: ipfsMetadataURI, // IPFS URL for the certificate
        certificateHash: transactionHash, // Blockchain transaction reference
        ipfsMetadataURI
      }
    });

    await newCertificate.save();
    
    res.status(201).json({ message: "NFT Certificate Issued Successfully!", certificate: newCertificate });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Get all students who completed a specific course
const getStudentsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    // Ensure course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found." });
    }

    // Find students who completed the course and received an NFT
    const students = await Student.find({
      _id: { $in: await NFTCertificate.distinct("student", { course: courseId }) }
    }).select('fullName email walletAddress');

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Find all NFT transactions of a specific certificate
const getNFTTransactions = async (req, res) => {
  try {
    const { certificateId } = req.params;

    // Check if certificate exists
    const certificate = await NFTCertificate.findById(certificateId);
    if (!certificate) {
      return res.status(404).json({ message: "NFT Certificate not found." });
    }

    // Fetch all transactions related to this NFT
    const transactions = await Transaction.find({ certificateId }).sort({ createdAt: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  getStudentCertificates,
  getStudentsByCourse,
  getNFTTransactions,
  issueNFTCertificate
};



// const NFTCertificate = require('../models/NFTCertificate');
// const Student = require('../models/Student');
// const Transaction = require('../models/Transaction');
// const Course = require('../models/Course');


