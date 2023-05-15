import express from "express";
import { getWishList, createWishList, updateWishList, deleteWishList, getWishListMovies } from "../controller/wishListController.js";
import verifyToken from "../middlewares/auth.js";

const router = express.Router();

router.route("/").get(verifyToken, getWishList);
router.route("/").put(verifyToken, createWishList);
router.route("/:id").put(verifyToken, updateWishList).delete(verifyToken, deleteWishList);
router.route("/movies").get(verifyToken, getWishListMovies);


export default router;