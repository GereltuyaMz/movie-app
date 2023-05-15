import WishList from "../models/wishListModel.js";
import Movie from "../models/movieModel.js";

export const getWishList = async (req, res) => {
  try {
    const movies = await WishList.find({ user: req.user.id });
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createWishList = async (req, res) => {
  const wishlist = await WishList.findById(req.body.wishlistId);
  // const movie = await Movie.findById(req.body.movieId);

  try {
    console.log("currentUser", req.user._id);
    if (!wishlist) {
      const create = await WishList.create({ movies: req.body.movieId, user: req.user._id });
      await create.save();
      return res.status(200).json(create);
    }
    const saveWishlist = await WishList.findByIdAndUpdate(req.body.wishlistId, { $push: { movies: req.body.movieId } })
    // wishlist.movies.push(movie);
    console.log("saving", saveWishlist);
    await saveWishlist.save();
    res.status(200).json(saveWishlist)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateWishList = async (req, res) => {
  const { params, body } = req;
  try {
    await WishList.findByIdAndUpdate(params.id, body);
    res.status(200).json(body)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const deleteWishList = async (req, res) => {
  const { id } = req.params;
  try {
    await WishList.findByIdAndDelete(id);
    res.status(200).json(id);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getWishListMovies = async (req, res) => {
  try {
    const movies = await WishList.find().populate('movies');
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}