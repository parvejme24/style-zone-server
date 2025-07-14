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
exports.deleteDiscount = exports.updateDiscount = exports.createDiscountForProduct = exports.getDiscountById = exports.getDiscountByProductId = void 0;
const discount_model_1 = require("./discount.model");
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const getDiscountByProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const discount = yield discount_model_1.DiscountModel.findByProductId(req.params.productId);
        if (!discount)
            return res.status(404).json({ error: "Discount not found for this product" });
        res.json(discount);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch discount for product" });
    }
});
exports.getDiscountByProductId = getDiscountByProductId;
const getDiscountById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const discount = yield discount_model_1.DiscountModel.findById(req.params.id);
        if (!discount)
            return res.status(404).json({ error: "Discount not found" });
        res.json(discount);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch discount" });
    }
});
exports.getDiscountById = getDiscountById;
const createDiscountForProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        if (!productId)
            return res.status(400).json({ error: "Product ID is required" });
        const product = yield prisma.product.findUnique({ where: { id: productId } });
        if (!product)
            return res.status(404).json({ error: "Product not found" });
        const { discount_percentage, start_time, end_time, categoryId } = req.body;
        const discount = yield discount_model_1.DiscountModel.createForProduct(productId, Object.assign({ discount_percentage,
            start_time,
            end_time }, (categoryId && { Category: { connect: { id: categoryId } } })));
        res.status(201).json(discount);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create discount for product" });
    }
});
exports.createDiscountForProduct = createDiscountForProduct;
const updateDiscount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const discount = yield discount_model_1.DiscountModel.update(req.params.id, req.body);
        res.json(discount);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update discount" });
    }
});
exports.updateDiscount = updateDiscount;
const deleteDiscount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield discount_model_1.DiscountModel.delete(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete discount" });
    }
});
exports.deleteDiscount = deleteDiscount;
//# sourceMappingURL=discount.controller.js.map