import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Middleware for authenticating admin routes
export const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.ADMIN_SECRET_KEY);
    req.admin = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
