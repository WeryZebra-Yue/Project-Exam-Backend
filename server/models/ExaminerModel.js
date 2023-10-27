import mongoose from "mongoose";

const User = new mongoose.Schema({
  e_id: {
    type: String,
  },
  eid: {
    type: String,
  },
  //   Name, Number, 2 x Email
  personalDetails: {
    type: Object,
  },
  // Institute details name, distance, role
  instituteDetails: {
    type: Object,
  },
  bankDetails: {
    type: Object,
  },
  // Documents bank passbook, rc_book, d_licence, Bank Details (IFSC, Account Number, Account Holder Name), passbook, rc_book, d_licence, Bank Details (IFSC, Account Number, Account Holder Name)
  documents: {
    type: Object,
  },
  roles: {
    type: Object,
  },
  createdAt: {
    type: Date,
  },
});

export default mongoose.model("User", User);
