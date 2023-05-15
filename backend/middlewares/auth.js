import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Token is required" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    console.log('decoded', decoded);
    req.user = await User.findById(decoded.id);
    console.log('req user', req.user);
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Not authorized!" })
  }
}

export default verifyToken;