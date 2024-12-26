import { Request, Response, NextFunction } from "express";
import { sendApiResponse } from "../../Utils/api.response";
import * as DoctorCrudService from "../../Services/Doctor/crud.service";

export const createDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { fname, lname, email, password, specialty } = req.body;

    const newDoctor = await DoctorCrudService.createDoctor({
      fname,
      lname,
      email,
      password,
      specialty,
    });

    sendApiResponse(res, 201, "Doctor created sucessfully", newDoctor);
  } catch (error) {
    next(error);
  }
};

export const getDoctors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const doctors = await DoctorCrudService.getDoctors();

    sendApiResponse(res, 200, "Doctors fetched sucessfully", doctors);
  } catch (error) {
    next(error);
  }
};

export const updateDoctorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { updates } = req.body;

    const updatedDoctor = await DoctorCrudService.updateDoctorById(id, updates);

    sendApiResponse(res, 200, "Doctor Updated Sucessfully", updatedDoctor);
  } catch (error) {
    next(error);
  }
};

export const deleteDoctorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const deletedDoctor = await DoctorCrudService.deleteDoctorById(id);

    sendApiResponse(res, 200, "Doctor deleted sucessfully", deletedDoctor);
  } catch (error) {
    next(error);
  }
};
