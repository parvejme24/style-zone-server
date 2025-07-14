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
exports.deleteReview = exports.updateReview = exports.createReviewForProduct = exports.getReviewById = exports.getReviewsByProductId = void 0;
const review_model_1 = require("./review.model");
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const getReviewsByProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield review_model_1.ReviewModel.findByProductId(req.params.productId);
        res.json(reviews);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch reviews for product" });
    }
});
exports.getReviewsByProductId = getReviewsByProductId;
const getReviewById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield review_model_1.ReviewModel.findById(req.params.id);
        if (!review)
            return res.status(404).json({ error: "Review not found" });
        res.json(review);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch review" });
    }
});
exports.getReviewById = getReviewById;
const createReviewForProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        if (!productId)
            return res.status(400).json({ error: "Product ID is required" });
        const product = yield prisma.product.findUnique({ where: { id: productId } });
        if (!product)
            return res.status(404).json({ error: "Product not found" });
        const { user_id, rating, comment } = req.body;
        const review = yield review_model_1.ReviewModel.create({
            product: { connect: { id: productId } },
            user_id,
            rating,
            comment
        });
        res.status(201).json(review);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create review for product" });
    }
});
exports.createReviewForProduct = createReviewForProduct;
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield review_model_1.ReviewModel.update(req.params.id, req.body);
        res.json(review);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update review" });
    }
});
exports.updateReview = updateReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield review_model_1.ReviewModel.delete(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete review" });
    }
});
exports.deleteReview = deleteReview;
//# sourceMappingURL=review.controller.js.map