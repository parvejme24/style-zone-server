"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const review_model_1 = require("./review.model");
exports.ReviewService = {
    getAllByProductId: (productId) => review_model_1.ReviewModel.findByProductId(productId),
    getById: (id) => review_model_1.ReviewModel.findById(id),
    create: (data) => review_model_1.ReviewModel.create(data),
    update: (id, data) => review_model_1.ReviewModel.update(id, data),
    delete: (id) => review_model_1.ReviewModel.delete(id),
};
//# sourceMappingURL=review.service.js.map