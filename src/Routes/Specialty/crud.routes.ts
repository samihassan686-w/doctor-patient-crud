import { Router } from "express";
import * as SpecialtyCrudController from "../../Controllers/Specialty/SpecialtyCrud.controller";

const SpecialtyCrudRoutes = Router();

SpecialtyCrudRoutes.post("/", SpecialtyCrudController.createSpecialty);
SpecialtyCrudRoutes.post("/", SpecialtyCrudController.getSpecialties);
SpecialtyCrudRoutes.post("/:id", SpecialtyCrudController.updateSpecialtyById);
SpecialtyCrudRoutes.post("/:id", SpecialtyCrudController.deleteSpecialtyById);

export default SpecialtyCrudRoutes;
