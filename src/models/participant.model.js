import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    phone: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    address: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    }
  },
  { timestamps: true }
);
export default mongoose.model("Participant", userSchema);
