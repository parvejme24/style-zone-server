import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { brandRoutes } from "./modules/brand";
import { categoryRoutes } from "./modules/category";
import { productRoutes } from "./modules/product";
import { sizeGuideRoutes } from "./modules/sizeGuide";
import { reviewRoutes } from "./modules/review";
import { discountRoutes } from "./modules/discount";
import { authRoutes } from "./modules/auth";
import { userRoutes } from "./modules/user";

const app: Application = express();

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each ip to 100 requests per windowms
});
app.use(limiter);

// home route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Style Zone API",
    status: "success",
    timestamp: new Date().toISOString(),
  });
});

// health check route
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", message: "Server is healthy" });
});

// test route for Vercel
app.get("/api/test", (req: Request, res: Response) => {
  res.status(200).json({
    message: "API is working on Vercel!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// Register brand routes
app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", brandRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", sizeGuideRoutes);
app.use("/api/v1", reviewRoutes);
app.use("/api/v1", discountRoutes);

// error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong!",
  });
});

export default app;
