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
exports.deleteSizeGuide = exports.updateSizeGuide = exports.createSizeGuideForProduct = exports.getSizeGuideByProductId = exports.getSizeGuideById = void 0;
const sizeGuide_model_1 = require("./sizeGuide.model");
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const getSizeGuideById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sizeGuide = yield sizeGuide_model_1.SizeGuideModel.findById(req.params.id);
        if (!sizeGuide)
            return res.status(404).json({ error: "Size guide not found" });
        res.json(sizeGuide);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch size guide" });
    }
});
exports.getSizeGuideById = getSizeGuideById;
const getSizeGuideByProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield prisma.product.findUnique({ where: { id: req.params.productId } });
        if (!product)
            return res.status(404).json({ error: "Product not found" });
        const sizeGuide = yield sizeGuide_model_1.SizeGuideModel.findByCategoryAndBrand(product.category_id, product.brand_id);
        if (!sizeGuide)
            return res.status(404).json({ error: "Size guide not found for this product" });
        res.json(sizeGuide);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch size guide for product" });
    }
});
exports.getSizeGuideByProductId = getSizeGuideByProductId;
const createSizeGuideForProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        if (!productId)
            return res.status(400).json({ error: "Product ID is required" });
        const product = yield prisma.product.findUnique({ where: { id: productId } });
        if (!product)
            return res.status(404).json({ error: "Product not found" });
        const { size_data } = req.body;
        const sizeGuide = yield sizeGuide_model_1.SizeGuideModel.create({
            category: { connect: { id: product.category_id } },
            brand: { connect: { id: product.brand_id } },
            size_data
        });
        res.status(201).json(sizeGuide);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create size guide for product" });
    }
});
exports.createSizeGuideForProduct = createSizeGuideForProduct;
const updateSizeGuide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sizeGuide = yield sizeGuide_model_1.SizeGuideModel.update(req.params.id, req.body);
        res.json(sizeGuide);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update size guide" });
    }
});
exports.updateSizeGuide = updateSizeGuide;
const deleteSizeGuide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sizeGuide_model_1.SizeGuideModel.delete(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete size guide" });
    }
});
exports.deleteSizeGuide = deleteSizeGuide;
//# sourceMappingURL=sizeGuide.controller.js.map