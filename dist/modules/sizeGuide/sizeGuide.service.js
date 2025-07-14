"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeGuideService = void 0;
const sizeGuide_model_1 = require("./sizeGuide.model");
exports.SizeGuideService = {
    getById: (id) => sizeGuide_model_1.SizeGuideModel.findById(id),
    getByCategoryAndBrand: (categoryId, brandId) => sizeGuide_model_1.SizeGuideModel.findByCategoryAndBrand(categoryId, brandId),
    createForProduct: (categoryId, brandId, sizeData) => sizeGuide_model_1.SizeGuideModel.createForProduct(categoryId, brandId, sizeData),
    update: (id, data) => sizeGuide_model_1.SizeGuideModel.update(id, data),
    delete: (id) => sizeGuide_model_1.SizeGuideModel.delete(id),
};
//# sourceMappingURL=sizeGuide.service.js.map