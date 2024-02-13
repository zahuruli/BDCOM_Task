import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add other options as needed
    });
    console.log(`Successfully Connected to MongoDB DataBase`.bgMagenta.white);
  } catch (error) {
    console.log(`MongoDB connection failed: ${error.message}`.bgRed.white);
  }
};

export default connectDB;
