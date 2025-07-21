import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../modules/auth/auth.types";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET!);
    (req as any).user = payload;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

export function restrictBlogModification(
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res.status(403).json({ error: "Not allowed" });
}

export function adminOrSuperAdminOnly(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = (req as any).user;
  if (!user || (user.role !== "ADMIN" && user.role !== "SUPER_ADMIN")) {
    return res.status(403).json({ error: "Admins or Super Admins only" });
  }
  next();
}

export function superAdminOnly(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = (req as any).user;
  if (!user || user.role !== "SUPER_ADMIN") {
    return res.status(403).json({ error: "Admins only" });
  }
  next();
}

export function ownerOnly(req: Request, res: Response, next: NextFunction) {
  const userIdFromToken = (req as any).userId;
  const userIdFromParams = req.params.userId;
  if (!userIdFromToken || userIdFromToken !== userIdFromParams) {
    return res.status(403).json({ error: "Access denied: not the owner" });
  }
  next();
}
