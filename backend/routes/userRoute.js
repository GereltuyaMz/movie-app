import express from "express";
import { register, logIn, protect } from "../controller/auth.js";
import { getUsers } from "../controller/userController.js";
import verifyToken from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/logIn", logIn);
router.get("/protect", verifyToken, protect);
router.get("/", getUsers)

export default router;