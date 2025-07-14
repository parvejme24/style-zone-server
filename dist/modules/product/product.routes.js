"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.get("/products", product_controller_1.getAllProducts);
router.get("/products/:id", product_controller_1.getProductById);
router.post("/products", product_controller_1.createProduct);
router.put("/products/:id", product_controller_1.updateProduct);
router.delete("/products/:id", product_controller_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=product.routes.js.map