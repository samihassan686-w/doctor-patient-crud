import { Request, Response, NextFunction } from "express";
import * as PatientCrudService from "../../Services/Patient/crud.service";
import { sendApiResponse } from "../../Utils/api.response";

export const createPatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { fname, lname, email, password } = req.body;

    const newPatient = await PatientCrudService.createPatient({
      fname,
      lname,
      email,
      password,
    });

    sendApiResponse(res, 201, "Patient created successfully", newPatient);
  } catch (error) {
    next(error);
  }
};

export const getPatients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const patients = await PatientCrudService.getPatients();

    sendApiResponse(res, 200, "Patients fetched sucessfully", patients);
  } catch (error) {
    next(error);
  }
};

export const updatePatientById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedPatient = await PatientCrudService.updatePatientById(
      id,
      updates
    );

    sendApiResponse(res, 200, "Patient updated successfully", updatedPatient);
  } catch (error) {
    next(error);
  }
};

export const deletePatientById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const deletedPatient = await PatientCrudService.deletePatientById(id);

    sendApiResponse(res, 200, "Patient deleted successfully", deletedPatient);
  } catch (error) {
    next(error);
  }
};
