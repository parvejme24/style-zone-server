"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const brand_1 = require("./modules/brand");
const category_1 = require("./modules/category");
const product_1 = require("./modules/product");
const sizeGuide_1 = require("./modules/sizeGuide");
const review_1 = require("./modules/review");
const discount_1 = require("./modules/discount");
const auth_1 = require("./modules/auth");
const user_1 = require("./modules/user");
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("dev"));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(limiter);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Style Zone API",
        status: "success",
        timestamp: new Date().toISOString(),
    });
});
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", message: "Server is healthy" });
});
app.get("/api/test", (req, res) => {
    res.status(200).json({
        message: "API is working on Vercel!",
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});
app.use("/api/v1", auth_1.authRoutes);
app.use("/api/v1", user_1.userRoutes);
app.use("/api/v1", brand_1.brandRoutes);
app.use("/api/v1", category_1.categoryRoutes);
app.use("/api/v1", product_1.productRoutes);
app.use("/api/v1", sizeGuide_1.sizeGuideRoutes);
app.use("/api/v1", review_1.reviewRoutes);
app.use("/api/v1", discount_1.discountRoutes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: "error",
        message: "Something went wrong!",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map