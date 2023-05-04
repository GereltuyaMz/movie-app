import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"]
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: [true, "Email already exist!"]
  },
  username: {
    type: String,
    required: [true, "Please enter username"],
    unique: [true, "Username already exist!"]
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: [6, "Password must be of minimum 6 characters"]
  },
  avatar: String,
  bio: {
    type: String,
    default: "Hi👋 Welcome To My Profile"
  },
  created: {
    type: Date,
    default: Date.now
  },
  postedMovies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
    }
  ]
})

export default mongoose.model('User', UserSchema)