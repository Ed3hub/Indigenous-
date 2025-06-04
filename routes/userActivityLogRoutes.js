import express from "express";
import {
  createUserActivity,
  getAllUserActivities,
  getUserActivityById,
  updateUserActivity,
  deleteUserActivity,
} from "../controllers/userActivityLogController.js";

const router = express.Router();

router.post("/", createUserActivity);
router.get("/", getAllUserActivities);
router.get("/:id", getUserActivityById);
router.put("/:id", updateUserActivity);
router.delete("/:id", deleteUserActivity);

export default router;
