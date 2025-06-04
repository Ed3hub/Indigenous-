import express from 'express';
import {
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment
} from '../controllers/commentController.js';

const router = express.Router();

router.post('/', createComment);           // Create
router.get('/', getAllComments);           // Read all
router.get('/:id', getCommentById);        // Read one
router.put('/:id', updateComment);         // Update
router.delete('/:id', deleteComment);      // Delete

export default router;
