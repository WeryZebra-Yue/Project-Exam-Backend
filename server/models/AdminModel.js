import mongoose from "mongoose";

const Admin = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Name missing!"],
  },
  password: {
    type: String,
    required: [true, "Password missing!"],
  },
});

export default mongoose.model("Admin", Admin);
