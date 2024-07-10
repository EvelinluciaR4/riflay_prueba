import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    creatorId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      default: "active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Rating", ratingSchema);
