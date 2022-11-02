import mongoose from "mongoose";

const User = new mongoose.Schema({
  SON: {
    type: Number,
  },
  SOP: {
    type: Number,
  },
  SON: {
    type: Number,
  },
  SOE: {
    type: Number,
  },
  SLM: {
    type: Number,
  },
});

export default mongoose.model("User", User);
