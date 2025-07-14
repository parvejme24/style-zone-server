import { config } from "dotenv";
import { connectDB } from "../src/config/database";
import app from "../src/app";

config();

let serverInitialized = false;

export default async function handler(req: any, res: any) {
  if (!serverInitialized) {
    await connectDB();
    serverInitialized = true;
  }

  // Important: this makes Express work in Vercel
  return app(req, res);
}
