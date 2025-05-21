import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.<development/production>.local",
  );
}

const connectToDatabase = async (retries = 3, delay = 3000) => {
  try {
    await mongoose.connect(DB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log(`Connected to local database in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting to database: ", error);

    if (retries > 0) {
      console.log(`Retrying connection (${retries} retries left)...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return connectToDatabase(retries - 1, delay);
    } else {
      console.error("Max retries reached. Exiting...");
      process.exit(1);
    }
  }
};

export default connectToDatabase;
