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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const product_service_1 = require("./product.service");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_service_1.ProductService.getAll();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_service_1.ProductService.getById(req.params.id);
        if (!product)
            return res.status(404).json({ error: "Product not found" });
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch product" });
    }
});
exports.getProductById = getProductById;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_service_1.ProductService.create(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create product" });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_service_1.ProductService.update(req.params.id, req.body);
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update product" });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_service_1.ProductService.delete(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete product" });
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.controller.js.map