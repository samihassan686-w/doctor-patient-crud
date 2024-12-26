import { Router } from "express";
import * as SpecialtyCrudController from "../../Controllers/Specialty/SpecialtyCrud.controller";

const SpecialtyCrudRoutes = Router();

SpecialtyCrudRoutes.post("/", SpecialtyCrudController.createSpecialty);
SpecialtyCrudRoutes.get("/", SpecialtyCrudController.getSpecialties);
SpecialtyCrudRoutes.put("/:id", SpecialtyCrudController.updateSpecialtyById);
SpecialtyCrudRoutes.delete("/:id", SpecialtyCrudController.deleteSpecialtyById);

export default SpecialtyCrudRoutes;
