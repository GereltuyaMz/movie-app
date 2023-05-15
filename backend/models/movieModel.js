import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required!"
  },
  overview: String,
  poster: String,
  backdrop_path: String,
  language: String,
  country: String,
  popularity: Number,
  release_date: Date,
  video: Boolean,
  vote_average: Number,
  directors: [String],
  writers: [String],
  type: {
    type: String,
    enum: ['movie', 'tv']
  },
  status: String,
  created: {
    type: Date,
    default: Date.now
  },
  postedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  wishlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WishList'
  }
})

export default mongoose.model('Movie', MovieSchema)