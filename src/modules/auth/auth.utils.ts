import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

console.log("SMTP_HOST:", process.env.SMTP_HOST); // Should print smtp.gmail.com

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(to: string, subject: string, text: string) {
  await transporter.sendMail({
    from: `"Style Zone" <${process.env.SMTP_USER}>`,
    to,
    subject,
    text,
  });
}

export function generateOtp(length = 6) {
  return Math.floor(100000 + Math.random() * 900000).toString().substring(0, length);
}

export function signJwt(payload: any) {
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, { expiresIn: "1h" });
}

export function signRefreshToken(payload: any) {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, { expiresIn: "7d" });
}

export function verifyRefreshToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET!);
  } catch {
    return null;
  }
}
