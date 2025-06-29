// brand.routes.ts
import { Router } from "express";
import {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
} from "./brand.controller";

const router = Router();

router.get("/brands", getAllBrands);
router.get("/brands/:id", getBrandById);
router.post("/brands", createBrand);
router.put("/brands/:id", updateBrand);
router.delete("/brands/:id", deleteBrand);

export default router;
