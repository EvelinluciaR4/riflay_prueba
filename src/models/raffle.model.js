import mongoose from "mongoose";

/* typeRaffle = "basic" | "free" | "personalized" */

const raffleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    description: {
      type: String,
      required: true,
      min: 6,
      max: 1500,
    },
    date: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    state: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    winner: {
      type: String,
      min: 6,
      max: 255,
    },
    owner: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    typeRaffle: {
      type: String,
      default: "basic",
    },
    size_board: {
      type: Number,
      default: 99,
    },
    category: {
      type: String,
      default: "none",
    },
    path : {
      type: String,
      unique : true,
    },
    lottery : {
      type : "String",
      default : "none"
    }
  },

  { timestamps: true }
);

export default mongoose.model("Raffle", raffleSchema);
