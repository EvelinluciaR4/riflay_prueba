import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
  owner: String,
  number: String,
  isAvailable: Boolean,
}, { _id: false });

const boardSchema = new mongoose.Schema({
  raffleId: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  positions: [positionSchema],
});

export default mongoose.model("Board", boardSchema);
