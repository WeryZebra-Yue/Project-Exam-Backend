import mongoose from "mongoose";

const User = new mongoose.Schema({
  e_id: {
    type: String,
    required: true,
  },
  //   Name, Number, 2 x Email
  personalDetails: {
    type: Object,
    required: true,
  },
  // Institute details name, distance
  instituteDetails: {
    type: Object,
    required: true,
  },
  // Documents bank passbook, rc_book, d_licence, Bank Details (IFSC, Account Number, Account Holder Name), passbook, rc_book, d_licence, Bank Details (IFSC, Account Number, Account Holder Name)
  documents: {
    type: Object,
    required: true,
  },
  roles: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
  },
});

export default mongoose.model("User", User);
