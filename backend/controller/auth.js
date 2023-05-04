import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, username, password } = req.body;
  try {
    const userExist = await User.findOne({ $or: [{ email }, { username }] })
    if (userExist) {
      return res.status(404).json({ message: "user already exist" })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userCreate = await User.create({
      name,
      email,
      username,
      password: hashedPassword
    });
    return res.status(201).json({ message: "user successfully created", userCreate });
  } catch (error) {
    return res.status(400).json({ message: "error creating user", error })
  }
}

const generateToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_TOKEN, { expiresIn: '2h' })
}

export const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!(email && password)) {
      return res.status(400).json({ message: "Can't leave empty field!" })
    }

    const user = await User.findOne({ email });
    // console.log('user', user);
    if (user && (await bcrypt.compare(password, user.password))) {
      return res.status(200).json({
        message: "Successfully logged in",
        _id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
        token: generateToken(user._id, user.email)
      })
    } else {
      return es.status(400).json({ message: "user doesn't exist or password not match" })
    }
  } catch (error) {
    return res.status(400).json({ message: "error logging user" })
  }
}

export const protect = async (req, res) => {
  return res.status(200).json({ message: "User data display" })
}