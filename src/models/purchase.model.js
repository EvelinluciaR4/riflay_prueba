import mongoose from "mongoose";

const purchaseShcema = new mongoose.Schema(
  {
    idUser: {
      type: String,
      required: true,
    },
    idBoard: {
      type: String,
      required: true,
    },
    positions: {
      type: Array,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Purchase", purchaseShcema);
