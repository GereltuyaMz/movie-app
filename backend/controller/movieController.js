import Movie from "../models/movieModel";

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
    await Movie.create({ movies })
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