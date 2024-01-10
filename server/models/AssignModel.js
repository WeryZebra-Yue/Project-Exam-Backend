import mongoose from "mongoose";

const Assignment = new mongoose.Schema({
  eid: {
    type: String,
  },
  formDetails: {
    type: Object,
  },
  travelDetails: {
    type: Object,
  },
  payDetails: {
    type: Object,
  },
  createdAt: {
    type: Date,
  },
});

export default mongoose.model("Assignment", Assignment);
