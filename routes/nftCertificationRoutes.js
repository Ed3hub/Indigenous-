import express from "express";
import {
  getAllNftCertificates,
  createNftCertificate,
  getNftCertificateById,
  deleteNftCertificate,
  updateNftCertificate,
} from "../controllers/nftCertificationController.js";

const router = express.Router();

router.post("/", createNftCertificate);
router.get("/", getAllNftCertificates);
router.get("/:id", getNftCertificateById);
router.put("/:id", updateNftCertificate);
router.delete("/:id", deleteNftCertificate);

export default router;
