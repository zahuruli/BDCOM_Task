import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Successfully Connected to MongoDB DataBase`.bgMagenta.white);
  } catch (error) {
    console.log(`Mongodb connection Failed ${error}`.bgRed.white);
  }
};

export default connectDB;
