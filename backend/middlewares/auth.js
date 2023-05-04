import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log('token', token);
  if (!token) {
    return res.status(401).json({ message: "Token is required" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    console.log('decode', decoded);
    console.log('request', req);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Not authorized!" })
  }
}

export default verifyToken;