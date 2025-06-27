import { Router } from "express";
import {
  getAllSizeGuides,
  getSizeGuideById,
  createSizeGuide,
  updateSizeGuide,
  deleteSizeGuide,
} from "./sizeGuide.controller";

const router = Router();

router.get("/size-guides", getAllSizeGuides);
router.get("/size-guides/:id", getSizeGuideById);
router.post("/size-guides", createSizeGuide);
router.put("/size-guides/:id", updateSizeGuide);
router.delete("/size-guides/:id", deleteSizeGuide);

export default router;
