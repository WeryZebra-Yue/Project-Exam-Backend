import mongoose from "mongoose";

const University = new mongoose.Schema({
  name: {
    type: String,
  },
  distance: {
    type: Number,
  },
});

export default mongoose.model("University", University);
