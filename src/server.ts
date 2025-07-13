import app from "./app";
import { config } from "dotenv";
import { connectDB } from "./config/database";

// Load environment variables
config();

let isConnected = false;

async function connectOnce() {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
      console.log("✅ Database connected successfully");
    } catch (error) {
      console.error("❌ Database connection failed:", error);
      throw error;
    }
  }
}

// Vercel serverless function handler
export default async function handler(req: any, res: any) {
  try {
    await connectOnce();
    return app(req, res);
  } catch (error: any) {
    console.error("❌ Serverless function error:", error);
    res.status(500).json({ 
      error: "Internal server error",
      message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
}

// For local development (when not on Vercel)
if (process.env.NODE_ENV !== 'production' || process.env.VERCEL !== '1') {
  const PORT = process.env.PORT || 5000;

  const startServer = async () => {
    try {
      await connectDB();
      app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
        console.log('Press CTRL+C to stop the server');
      });
    } catch (error) {
      console.error('Failed to start server:', error);
      process.exit(1);
    }
  };

  startServer();
}
