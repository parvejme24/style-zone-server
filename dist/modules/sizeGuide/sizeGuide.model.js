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
exports.SizeGuideModel = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
exports.SizeGuideModel = {
    findAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.sizeGuide.findMany();
    }),
    findById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.sizeGuide.findUnique({ where: { id } });
    }),
    findByCategoryAndBrand: (category_id, brand_id) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.sizeGuide.findFirst({ where: { category_id, brand_id } });
    }),
    createForProduct: (category_id, brand_id, size_data) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.sizeGuide.create({
            data: {
                category: { connect: { id: category_id } },
                brand: { connect: { id: brand_id } },
                size_data
            }
        });
    }),
    create: (data) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.sizeGuide.create({ data });
    }),
    update: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.sizeGuide.update({ where: { id }, data });
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma.sizeGuide.delete({ where: { id } });
    }),
};
//# sourceMappingURL=sizeGuide.model.js.map