import express from "express";
import { config } from "dotenv";
import DataSource from "./data-source";

config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

DataSource.connect();

app.listen(PORT, () => {
  console.log(`Server is Live on PORT: ${PORT}`);
});
