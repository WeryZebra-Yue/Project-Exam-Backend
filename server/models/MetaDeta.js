import mongoose from "mongoose";

const MetaDeta = new mongoose.Schema({
  unique: {
    type: String,
  },
  lastUpdated: {
    type: Date,
  },
});

export default mongoose.model("MetaDeta", MetaDeta);
