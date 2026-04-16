import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  characterName: {
    type: String,
  },
  availability: {
    type: Boolean,
    default: true,
  }
}, { timestamps: true });

export default mongoose.model("Player", playerSchema);