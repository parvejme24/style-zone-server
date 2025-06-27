import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  getProductFullById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./product.controller";

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.get("/products/:id/full", getProductFullById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
