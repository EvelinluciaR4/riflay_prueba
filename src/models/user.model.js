import mongoose from "mongoose";

/* const state = "active" | "banned" | "suspend" | "canceled"; */

/* type creator = "free" | "premium" */

const registerSchema = new mongoose.Schema(
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
      unique: true,
      min: 6,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },
    city: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    country: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    department: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 255,
    },
    address: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    role: {
      type: String,
      enum: ["usuariocreador", "superadmin"],
      default: "usuariocreador",
      required: true,
    },
    dni: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    rating: {
      type: Number,
      default: 0,
    },
    countRating: {
      type: Number,
      default: 0,
    },
    state: {
      type: String,
      default: "active",
    },
    gender: {
      type: String,
    },
    typeCreator: {
      type: String,
      default: "free",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", registerSchema);
