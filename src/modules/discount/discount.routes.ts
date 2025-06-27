import { Router } from "express";
import {
  getDiscountById,
  getDiscountByProductId,
  createDiscount,
  updateDiscount,
  deleteDiscount,
} from "./discount.controller";

const router = Router();

router.get("/products/:productId/discount", getDiscountByProductId);
router.get("/discounts/:id", getDiscountById);
router.post("/discounts", createDiscount);
router.put("/discounts/:id", updateDiscount);
router.delete("/discounts/:id", deleteDiscount);

export default router;
