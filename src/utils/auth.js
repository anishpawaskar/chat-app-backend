import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const generateHash = async (password) => {
  try {
    return bcrypt.hash(password, 10);
  } catch (err) {
    console.error(err);
  }
};

export const compareHash = async (password, hashPassword) => {
  try {
    return bcrypt.compare(password, hashPassword);
  } catch (err) {
    console.error(err);
  }
};

export const generateJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "5h",
  });
  return token;
};

export const verifyToken = (req, res, next) => {
  const token = req.cookies[process.env.COOKIE_NAME];

  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY);
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
