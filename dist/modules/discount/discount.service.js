"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountService = void 0;
const discount_model_1 = require("./discount.model");
exports.DiscountService = {
    getByProductId: (productId) => discount_model_1.DiscountModel.findByProductId(productId),
    getById: (id) => discount_model_1.DiscountModel.findById(id),
    createForProduct: (productId, data) => discount_model_1.DiscountModel.createForProduct(productId, data),
    update: (id, data) => discount_model_1.DiscountModel.update(id, data),
    delete: (id) => discount_model_1.DiscountModel.delete(id),
};
//# sourceMappingURL=discount.service.js.map