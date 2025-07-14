"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Basic middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// home route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Style Zone API",
        status: "success",
        timestamp: new Date().toISOString(),
    });
});
// health check route
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", message: "Server is healthy" });
});
// test route for Vercel
app.get("/api/test", (req, res) => {
    res.status(200).json({
        message: "API is working on Vercel!",
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        databaseUrl: process.env.DATABASE_URL ? 'Configured' : 'Not configured'
    });
});
// simple health check without database
app.get("/api/health-simple", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "Server is healthy (no database check)",
        timestamp: new Date().toISOString()
    });
});
// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: "error",
        message: "Something went wrong!",
    });
});
exports.default = app;
