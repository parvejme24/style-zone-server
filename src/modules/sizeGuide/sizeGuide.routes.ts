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
router.get("/products/:productId/size-guide", getSizeGuideByProductId);
router.post("/products/:productId/size-guide", createSizeGuideForProduct);
router.put("/size-guides/:id", updateSizeGuide);
router.delete("/size-guides/:id", deleteSizeGuide);

export default router;
