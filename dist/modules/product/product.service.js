"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
exports.ProductService = {
    getAll: () => product_model_1.ProductModel.findAll(),
    getById: (id) => product_model_1.ProductModel.findById(id),
    create: (data) => product_model_1.ProductModel.create(data),
    update: (id, data) => product_model_1.ProductModel.update(id, data),
    delete: (id) => product_model_1.ProductModel.delete(id),
};
//# sourceMappingURL=product.service.js.map