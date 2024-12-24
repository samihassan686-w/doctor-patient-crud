import mongoose from "mongoose";
import { config } from "dotenv";

config();
const MONGO = process.env.MONGO_URL || " ";

const DataSource = {
  connect: async () => {
    try {
      await mongoose.connect(MONGO);
    } catch (error) {
      console.log("Error connecting to database: ", error);
    }
  },
};

export default DataSource;
