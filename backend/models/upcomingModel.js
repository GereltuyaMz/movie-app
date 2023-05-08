import mongoose from 'mongoose';

const UpcomingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A title is required.'],
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
})

export default mongoose.model('Upcoming', UpcomingSchema)