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
exports.connectDB = exports.prisma = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});
exports.prisma = prisma;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!process.env.DATABASE_URL) {
            throw new Error('DATABASE_URL is not defined in environment variables');
        }
        yield prisma.$connect();
        console.log('✅ Database connection established successfully');
        return true;
    }
    catch (error) {
        console.error('❌ Database connection failed:', error);
        // Don't exit process in serverless environment
        if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
            process.exit(1);
        }
        throw error;
    }
});
exports.connectDB = connectDB;
