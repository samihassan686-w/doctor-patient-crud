import { Router } from "express";
import * as PatientCrudController from "../../Controllers/Patient/PatientCrud.controller";

const PatientCrudRoutes = Router();

PatientCrudRoutes.post("/", PatientCrudController.createPatient);
PatientCrudRoutes.get("/", PatientCrudController.getPatients);
PatientCrudRoutes.patch("/:id", PatientCrudController.updatePatientById);
PatientCrudRoutes.delete("/:id", PatientCrudController.deletePatientById);

export default PatientCrudRoutes;
