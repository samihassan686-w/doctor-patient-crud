import { Request, Response, NextFunction } from "express";
import { sendApiResponse } from "../../Utils/api.response";
import * as SpecialtyCrudService from "../../Services/Specialty/crud.service";

export const createSpecialty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;

    const newSpecialty = await SpecialtyCrudService.createSpecialty({ name });

    sendApiResponse(res, 201, "Specialty created sucessfully", newSpecialty);
  } catch (error) {
    next(error);
  }
};

export const getSpecialties = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const specialties = await SpecialtyCrudService.getSpecialties();

    sendApiResponse(res, 200, "Specialties fetched sucessfully", specialties);
  } catch (error) {
    next(error);
  }
};

export const updateSpecialtyById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { updates } = req.body;

    const updatedSpecialty = await SpecialtyCrudService.updateSpecialtyById(
      id,
      updates
    );

    sendApiResponse(
      res,
      200,
      "Specialty updated sucessfully",
      updatedSpecialty
    );
  } catch (error) {
    next(error);
  }
};

export const deleteSpecialtyById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const deletedSpecialty = await SpecialtyCrudService.deleteSpecialtyById(id);

    sendApiResponse(
      res,
      200,
      "Specialty deleted sucessfully",
      deletedSpecialty
    );
  } catch (error) {
    next(error);
  }
};
