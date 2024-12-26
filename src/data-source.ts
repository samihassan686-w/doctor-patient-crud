import mongoose from "mongoose";
import { config } from "dotenv";

config();
const MONGO = process.env.MONGO_URL || " ";

const DataSource = {
  connect: async () => {
    try {
      await mongoose.connect(MONGO);

      console.log("Database connected Sucessfully");
    } catch (error) {
      console.log("Error connecting to database: ", error);
    }
  },
  disconnect: async () => {
    try {
      await mongoose.connection.close();
      console.log("Database connection closed successfully.");
    } catch (error) {
      console.log("Error closing the database connection: ", error);
    }
  },
};

export default DataSource;
