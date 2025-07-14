"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategoryById = exports.getAllCategories = void 0;
const category_model_1 = require("./category.model");
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_model_1.CategoryModel.findAll();
        res.json(categories);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch categories" });
    }
});
exports.getAllCategories = getAllCategories;
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_model_1.CategoryModel.findById(req.params.id);
        if (!category)
            return res.status(404).json({ error: "Category not found" });
        res.json(category);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch category" });
    }
});
exports.getCategoryById = getCategoryById;
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_model_1.CategoryModel.create(req.body);
        res.status(201).json(category);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create category" });
    }
});
exports.createCategory = createCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_model_1.CategoryModel.update(req.params.id, req.body);
        res.json(category);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update category" });
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield category_model_1.CategoryModel.delete(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete category" });
    }
});
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=category.controller.js.map