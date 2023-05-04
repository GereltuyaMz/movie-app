import express from "express";
import { getMovies, createMovies, updateMovie, deleteMovie } from "../controller/movieController.js";

const router = express.Router();

router.route("/").get(getMovies).post(createMovies);
router.route("/:id").put(updateMovie).delete(deleteMovie);

export default router;