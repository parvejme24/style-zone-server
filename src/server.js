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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const app_1 = __importDefault(require("./app"));
const dotenv_1 = require("dotenv");
// Load environment variables
(0, dotenv_1.config)();
// Vercel serverless function handler
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("🚀 Serverless function called");
            console.log("Environment:", process.env.NODE_ENV);
            console.log("Database URL exists:", !!process.env.DATABASE_URL);
            return (0, app_1.default)(req, res);
        }
        catch (error) {
            console.error("❌ Serverless function error:", error);
            return res.status(500).json({
                error: "Internal server error",
                message: error.message || 'Something went wrong',
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        }
    });
}
// For local development (when not on Vercel)
if (process.env.NODE_ENV !== 'production' || process.env.VERCEL !== '1') {
    const PORT = process.env.PORT || 5000;
    const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            app_1.default.listen(PORT, () => {
                console.log(`🚀 Server is running on http://localhost:${PORT}`);
                console.log('Press CTRL+C to stop the server');
            });
        }
        catch (error) {
            console.error('Failed to start server:', error);
            process.exit(1);
        }
    });
    startServer();
}
