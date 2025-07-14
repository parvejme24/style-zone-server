"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const category_model_1 = require("./category.model");
exports.CategoryService = {
    getAll: () => category_model_1.CategoryModel.findAll(),
    getById: (id) => category_model_1.CategoryModel.findById(id),
    create: (data) => category_model_1.CategoryModel.create(data),
    update: (id, data) => category_model_1.CategoryModel.update(id, data),
    delete: (id) => category_model_1.CategoryModel.delete(id),
};
//# sourceMappingURL=category.service.js.map