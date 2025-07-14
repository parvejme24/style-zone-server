import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    environment: process.env.NODE_ENV || 'development',
    databaseUrl: process.env.DATABASE_URL ? 'Configured' : 'Not configured'
  });
});

// simple health check without database
app.get("/api/health-simple", (req: Request, res: Response) => {
  res.status(200).json({ 
    status: "ok", 
    message: "Server is healthy (no database check)",
    timestamp: new Date().toISOString()
  });
});

// error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong!",
  });
});

export default app;
