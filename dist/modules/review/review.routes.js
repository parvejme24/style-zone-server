"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_controller_1 = require("./review.controller");
const router = (0, express_1.Router)();
router.get("/reviews/:productId", review_controller_1.getReviewsByProductId);
router.get("/reviews/:id", review_controller_1.getReviewById);
router.post("/reviews/:productId", review_controller_1.createReviewForProduct);
router.put("/reviews/:id", review_controller_1.updateReview);
router.delete("/reviews/:id", review_controller_1.deleteReview);
exports.default = router;
//# sourceMappingURL=review.routes.js.map