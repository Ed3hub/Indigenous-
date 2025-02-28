const express = require('express');
const router = express.Router();
const { getAllCertifications, createCertification } = require('../controllers/nftCertificationController');

router.get('/', getAllCertifications);
router.post('/', createCertification);

module.exports = router;
