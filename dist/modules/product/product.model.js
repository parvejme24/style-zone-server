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
exports.ProductModel = void 0;
const prisma_1 = require("../../generated/prisma");
const review_model_1 = require("../review/review.model");
const discount_model_1 = require("../discount/discount.model");
const sizeGuide_model_1 = require("../sizeGuide/sizeGuide.model");
const prisma = new prisma_1.PrismaClient();
function enrichProduct(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const [reviews, discount, sizeGuide, variants] = yield Promise.all([
            review_model_1.ReviewModel.findByProductId(product.id),
            discount_model_1.DiscountModel.findByProductId(product.id),
            sizeGuide_model_1.SizeGuideModel.findByCategoryAndBrand(product.category_id, product.brand_id),
            prisma.productVariant.findMany({ where: { product_id: product.id } })
        ]);
        return Object.assign(Object.assign({}, product), { reviews,
            discount,
            sizeGuide,
            variants });
    });
}
exports.ProductModel = {
    findAll: () => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield prisma.product.findMany();
        return Promise.all(products.map(enrichProduct));
    }),
    findById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield prisma.product.findUnique({ where: { id } });
        if (!product)
            return null;
        return enrichProduct(product);
    }),
    create: (data) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.product.create({ data });
    }),
    update: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.product.update({ where: { id }, data });
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.product.delete({ where: { id } });
    }),
};
//# sourceMappingURL=product.model.js.map