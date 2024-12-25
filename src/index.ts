import express from "express";
import { config } from "dotenv";
import DataSource from "./data-source";
import PatientCrudRoutes from "./Routes/Patient/crud.routes";
import DoctorCrudRoutes from "./Routes/Doctor/crud.routes";
import SpecialtyCrudRoutes from "./Routes/Specialty/crud.routes";
import { errorHandler } from "./Middlewares/error.middleware";

config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/patient", PatientCrudRoutes);
app.use("/doctor", DoctorCrudRoutes);
app.use("/specialty", SpecialtyCrudRoutes);

DataSource.connect();

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is Live on PORT: ${PORT}`);
});
