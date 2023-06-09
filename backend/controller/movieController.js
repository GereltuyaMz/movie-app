import Movie from "../models/movieModel.js";
import Upcoming from "../models/upcomingModel.js";
import Toprating from "../models/topratingModel.js"

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createMovies = async (req, res) => {
  const movies = req.body;
  try {
    await Movie.create(movies)
    res.status(200).json(movies)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateMovie = async (req, res) => {
  const { params, body } = req;
  try {
    await Movie.findByIdAndUpdate(params.id, body);
    res.status(200).json(body)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.findByIdAndDelete(id);
    res.status(200).json(id);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getUpcomingMovies = async (req, res) => {
  try {
    const movies = await Upcoming.find({});
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getTopRatedMovies = async (req, res) => {
  try {
    const movies = await Toprating.find({});
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const searchByTitle = async (req, res) => {
  const { keyword } = req.query;
  try {
    const movies = await Movie.find({ title: { $regex: keyword, $options: 'i' } });
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}