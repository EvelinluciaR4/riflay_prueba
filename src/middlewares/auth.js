// middleware/auth.js
import { jwt } from "jsonwebtoken";
import User from "../models/user.model.js";
import { SECRET } from "../config/config.js";

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, SECRET, async (err, decoded) => {
    if (err)
      return res.status(500).json({ message: "Failed to authenticate token" });

    req.user = await User.findById(decoded.id);
    next();
  });
};

const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};

export default { authenticate, authorize };
