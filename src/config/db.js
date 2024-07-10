import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://devriflay:zYcNtH087UFHRSvc@desarrollo.qyktxlq.mongodb.net/?retryWrites=true&w=majority&appName=Desarrollo");
    console.log(">>> DB conectada");
  } catch (error) {
    console.log(error);
  }
}; 