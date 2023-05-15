import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema({
  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    default: null
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('WishList', WishlistSchema)