"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandService = void 0;
const brand_model_1 = require("./brand.model");
exports.BrandService = {
    getAll: () => brand_model_1.BrandModel.findAll(),
    getById: (id) => brand_model_1.BrandModel.findById(id),
    create: (data) => brand_model_1.BrandModel.create(data),
    update: (id, data) => brand_model_1.BrandModel.update(id, data),
    delete: (id) => brand_model_1.BrandModel.delete(id),
};
//# sourceMappingURL=brand.service.js.map