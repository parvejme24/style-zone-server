import app from "./app";
import { config } from "dotenv";

// Load environment variables
config();

// Vercel serverless function handler
export default async function handler(req: any, res: any) {
  try {
    console.log("🚀 Serverless function called");
    console.log("Environment:", process.env.NODE_ENV);
    console.log("Database URL exists:", !!process.env.DATABASE_URL);
    
    return app(req, res);
  } catch (error: any) {
    console.error("❌ Serverless function error:", error);
    return res.status(500).json({ 
      error: "Internal server error",
      message: error.message || 'Something went wrong',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

// For local development (when not on Vercel)
if (process.env.NODE_ENV !== 'production' || process.env.VERCEL !== '1') {
  const PORT = process.env.PORT || 5000;

  const startServer = async () => {
    try {
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
