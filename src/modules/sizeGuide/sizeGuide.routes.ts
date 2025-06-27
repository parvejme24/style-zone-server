import { Router } from "express";
import {
  getSizeGuideById,
  getSizeGuideByProductId,
  createSizeGuideForProduct,
  updateSizeGuide,
  deleteSizeGuide,
} from "./sizeGuide.controller";

const router = Router();

router.get("/size-guides/:id", getSizeGuideById);
router.get("/size-guides/:productId", getSizeGuideByProductId);
router.post("/size-guides/:productId", createSizeGuideForProduct);
router.put("/size-guides/:id", updateSizeGuide);
router.delete("/size-guides/:id", deleteSizeGuide);

export default router;
