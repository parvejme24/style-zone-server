"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const discount_controller_1 = require("./discount.controller");
const router = (0, express_1.Router)();
router.get("/discounts/:productId", discount_controller_1.getDiscountByProductId);
router.get("/discounts/:id", discount_controller_1.getDiscountById);
router.post("/discounts/:productId", discount_controller_1.createDiscountForProduct);
router.put("/discounts/:id", discount_controller_1.updateDiscount);
router.delete("/discounts/:id", discount_controller_1.deleteDiscount);
exports.default = router;
//# sourceMappingURL=discount.routes.js.map