import mongoose from "mongoose";

const strikeSchema = new mongoose.Schema(
  {
    creatorID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    reason: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    type: {
      type: ["suspend", "unsuspend"],
      required: true,
      min: 6,
      max: 255,
    },
    byAdmin: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Strike", strikeSchema);
