import express from "express";
import {
  loginAdmin,
  getAllUsers,
  getAllComments,
  getAllThreads,
  getActivityLogs,
  getNftCertificates,
  verifyCertificate,
  getPlatformStats,
} from "../controllers/adminController.js";

// import { verifyAdmin } from "./middlewares/adminAuth.js";
import { verifyAdmin } from "../middleware/adminAuth.js";
const router = express.Router();

// Public admin route
router.post("/login", loginAdmin);

// Protected routes
router.use(verifyAdmin);

router.get("/users", getAllUsers);
router.get("/comments", getAllComments);
router.get("/threads", getAllThreads);
router.get("/logs", getActivityLogs);
router.get("/certificates", getNftCertificates);
router.get("/certificates/verify", verifyCertificate);
router.get("/stats", getPlatformStats);

export default router;
