import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required!"
  },
  overview: String,
  poster: String,
  releaseDate: Date,
  review: Number,
  genres: [String],
  created: {
    type: Date,
    default: Date.now
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
})

export default mongoose.model('Movie', MovieSchema)