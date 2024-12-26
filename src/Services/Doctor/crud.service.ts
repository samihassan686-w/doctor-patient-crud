import Doctors from "../../Models/Doctor";
import { generateHashedPassword } from "../../Utils/generate.hash";

export const createDoctor = async (doctorData: {
  fname: string;
  lname: string;
  email: string;
  password: string;
  specialty: string;
}) => {
  const existingDoctor = await Doctors.findOne({ email: doctorData.email });
  if (existingDoctor) {
    throw new Error("Doctor with this email already exists");
  }

  const newDoctor = new Doctors({
    ...doctorData,
    passowrd: await generateHashedPassword(doctorData.password),
  });

  return await newDoctor.save();
};

export const getDoctors = async () => {
  return await Doctors.find();
};

export const updateDoctorById = async (
  id: string,
  updateData: {
    fname: string;
    lname: string;
    email: string;
    password: string;
    specialty: string;
  }
) => {
  const doctor = await Doctors.findById(id);

  if (!doctor) {
    throw new Error("Doctor not found");
  }

  if (updateData.email && updateData.email !== doctor.email) {
    const existingDoctor = await Doctors.findOne({ email: updateData.email });
    if (existingDoctor) {
      throw new Error("Doctor with this email already exists");
    }
    doctor.email = updateData.email;
  }

  if (updateData.fname) {
    doctor.fname = updateData.fname;
  }
  if (updateData.lname) {
    doctor.lname = updateData.lname;
  }
  if (updateData.password) {
    doctor.password = await generateHashedPassword(updateData.password);
  }

  const updatedDoctor = await doctor.save();

  return updatedDoctor;
};

export const deleteDoctorById = async (id: string) => {
  const doctor = Doctors.findByIdAndDelete(id);

  if (!doctor) {
    throw new Error("Doctor not found");
  }

  return doctor;
};
