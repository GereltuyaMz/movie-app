import express from "express";
import { getMovies, createMovies, updateMovie, deleteMovie, getUpcomingMovies, getTopRatedMovies, searchByTitle } from "../controller/movieController.js";

const router = express.Router();

router.route("/").get(getMovies).post(createMovies);
router.route("/:id").put(updateMovie).delete(deleteMovie);
router.route("/upcoming").get(getUpcomingMovies);
router.route("/toprating").get(getTopRatedMovies);
router.route("/search").get(searchByTitle);

export default router;