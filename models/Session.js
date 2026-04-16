import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  system: {
    type: String,
    required: true,
  },
  time: {
    type: String, // "22:30"
    required: true,
  },
  timezone: {
    type: String,
    default: "EST",
  },
  isRecurring: {
    type: Boolean,
    default: true,
  },
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
  }]
}, { timestamps: true });

export default mongoose.model("Session", sessionSchema);