import Patients from "../../Models/Patient";
import { generateHashedPassword } from "../../Utils/generate.hash";

export const createPatient = async (patientData: {
  fname: string;
  lname: string;
  email: string;
  password: string;
}) => {
  const existingPatient = await Patients.findOne({ email: patientData.email });
  if (existingPatient) {
    throw new Error("Patient with this email already exists");
  }

  const newPatient = new Patients({
    ...patientData,
    password: await generateHashedPassword(patientData.password),
  });

  return await newPatient.save();
};

export const getPatients = async () => {
  return await Patients.find();
};

export const updatePatientById = async (
  id: string,
  updateData: {
    fname?: string;
    lname?: string;
    email?: string;
    password?: string;
  }
) => {
  const patient = await Patients.findById(id);

  if (!patient) {
    throw new Error("Patient not found");
  }

  if (updateData.email && updateData.email !== patient.email) {
    const existingPatient = await Patients.findOne({ email: updateData.email });
    if (existingPatient) {
      throw new Error("Patient with this email already exists");
    }
    patient.email = updateData.email;
  }

  if (updateData.fname) {
    patient.fname = updateData.fname;
  }
  if (updateData.lname) {
    patient.lname = updateData.lname;
  }
  if (updateData.password) {
    patient.password = await generateHashedPassword(updateData.password);
  }

  const updatedPatient = await patient.save();

  return updatedPatient;
};

export const deletePatientById = async (id: string) => {
  const patient = await Patients.findByIdAndDelete(id);

  if (!patient) {
    throw new Error("Patient not found");
  }

  return patient;
};
