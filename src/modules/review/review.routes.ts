import { Router } from "express";
import {
  getReviewsByProductId,
  getReviewById,
  createReviewForProduct,
  updateReview,
  deleteReview,
} from "./review.controller";

const router = Router();

router.get("/reviews/:productId", getReviewsByProductId);
router.get("/reviews/:id", getReviewById);
router.post("/reviews/:productId", createReviewForProduct);
router.put("/reviews/:id", updateReview);
router.delete("/reviews/:id", deleteReview);

export default router;
