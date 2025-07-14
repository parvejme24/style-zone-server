"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brand_controller_1 = require("./brand.controller");
const router = (0, express_1.Router)();
router.get("/brands", brand_controller_1.getAllBrands);
router.get("/brands/:id", brand_controller_1.getBrandById);
router.post("/brands", brand_controller_1.createBrand);
router.put("/brands/:id", brand_controller_1.updateBrand);
router.delete("/brands/:id", brand_controller_1.deleteBrand);
exports.default = router;
//# sourceMappingURL=brand.routes.js.map