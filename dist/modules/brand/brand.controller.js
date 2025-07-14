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
exports.deleteBrand = exports.updateBrand = exports.createBrand = exports.getBrandById = exports.getAllBrands = void 0;
const brand_model_1 = require("./brand.model");
const getAllBrands = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const brands = yield brand_model_1.BrandModel.findAll();
        res.json(brands);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch brands" });
    }
});
exports.getAllBrands = getAllBrands;
const getBrandById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const brand = yield brand_model_1.BrandModel.findById(req.params.id);
        if (!brand)
            return res.status(404).json({ error: "Brand not found" });
        res.json(brand);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch brand" });
    }
});
exports.getBrandById = getBrandById;
const createBrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const brand = yield brand_model_1.BrandModel.create(req.body);
        res.status(201).json(brand);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create brand" });
    }
});
exports.createBrand = createBrand;
const updateBrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const brand = yield brand_model_1.BrandModel.update(req.params.id, req.body);
        res.json(brand);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update brand" });
    }
});
exports.updateBrand = updateBrand;
const deleteBrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield brand_model_1.BrandModel.delete(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete brand" });
    }
});
exports.deleteBrand = deleteBrand;
//# sourceMappingURL=brand.controller.js.map