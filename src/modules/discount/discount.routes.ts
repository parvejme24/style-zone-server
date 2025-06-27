import { Router } from "express";
import {
  getDiscountById,
  getDiscountByProductId,
  createDiscountForProduct,
  updateDiscount,
  deleteDiscount,
} from "./discount.controller";

const router = Router();

router.get("/discounts/:productId", getDiscountByProductId);
router.get("/discounts/:id", getDiscountById);
router.post("/discounts/:productId", createDiscountForProduct);
router.put("/discounts/:id", updateDiscount);
router.delete("/discounts/:id", deleteDiscount);

export default router;
