import { Router } from "express";
import * as DoctorCrudController from "../../Controllers/Doctor/DoctorCrud.controller";

const DoctorCrudRoutes = Router();

DoctorCrudRoutes.post("/", DoctorCrudController.createDoctor);
DoctorCrudRoutes.get("/", DoctorCrudController.getDoctors);
DoctorCrudRoutes.patch("/:id", DoctorCrudController.updateDoctorById);
DoctorCrudRoutes.delete("/:id", DoctorCrudController.deleteDoctorById);

export default DoctorCrudRoutes;
