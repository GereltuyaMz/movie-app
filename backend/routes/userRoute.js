import express from "express";
import { register, logIn, protect } from "../controller/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/logIn", logIn);
router.get("/protect", protect);

export default router;