"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sizeGuide_controller_1 = require("./sizeGuide.controller");
const router = (0, express_1.Router)();
router.get("/size-guides/:id", sizeGuide_controller_1.getSizeGuideById);
router.get("/size-guides/:productId", sizeGuide_controller_1.getSizeGuideByProductId);
router.post("/size-guides/:productId", sizeGuide_controller_1.createSizeGuideForProduct);
router.put("/size-guides/:id", sizeGuide_controller_1.updateSizeGuide);
router.delete("/size-guides/:id", sizeGuide_controller_1.deleteSizeGuide);
exports.default = router;
//# sourceMappingURL=sizeGuide.routes.js.map