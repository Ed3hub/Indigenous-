const express = require('express');
const { 
  getStudentCertificates, 
  getStudentsByCourse, 
  getNFTTransactions, 
  issueNFTCertificate 
} = require('../controllers/nftCertificateController');

const router = express.Router();

// POST - Issue NFT Certificate
router.post('/certificate/issue', issueNFTCertificate);

// GET - Fetch all NFT certificates of a student
router.get('/student/:studentId/certificates', getStudentCertificates);

// GET - Fetch all students who completed a specific course
router.get('/course/:courseId/completed-students', getStudentsByCourse);

// GET - Find all NFT transactions of a specific certificate
router.get('/certificate/:certificateId/transactions', getNFTTransactions);

module.exports = router;
