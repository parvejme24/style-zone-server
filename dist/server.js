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
const database_1 = require("./config/database");
(0, dotenv_1.config)();
let isConnected = false;
function connectOnce() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!isConnected) {
            try {
                yield (0, database_1.connectDB)();
                isConnected = true;
                console.log("✅ Database connected successfully");
            }
            catch (error) {
                console.error("❌ Database connection failed:", error);
                throw error;
            }
        }
    });
}
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connectOnce();
            return (0, app_1.default)(req, res);
        }
        catch (error) {
            console.error("❌ Serverless function error:", error);
            res.status(500).json({
                error: "Internal server error",
                message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
            });
        }
    });
}
if (process.env.NODE_ENV !== 'production' || process.env.VERCEL !== '1') {
    const PORT = process.env.PORT || 5000;
    const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, database_1.connectDB)();
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
//# sourceMappingURL=server.js.map