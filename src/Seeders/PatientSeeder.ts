import * as PatientCrudService from "../Services/Patient/crud.service";
import { AppError } from "../Middlewares/error.middleware";

const seedPatients = async () => {
  const patients = [
    {
      fname: "John",
      lname: "Doe",
      email: "john.doe@example.com",
      password: "test2244",
    },
    {
      fname: "Jane",
      lname: "Smith",
      email: "jane.smith@example.com",
      password: "test122244",
    },
    {
      fname: "Michael",
      lname: "Johnson",
      email: "michael.johnson@example.com",
      password: "test2384",
    },
  ];

  for (const patient of patients) {
    try {
      await PatientCrudService.createPatient(patient);
      console.log(`Patient ${patient.email} created successfully.`);
    } catch (error) {
      if (error instanceof AppError) {
        console.error(
          `Operational error creating patient ${patient.email}:`,
          error.message
        );
      } else if (error instanceof Error) {
        console.error(
          `Unexpected error creating patient ${patient.email}:`,
          error.message
        );
      } else {
        console.error(
          `Unknown error creating patient ${patient.email}:`,
          error
        );
      }
    }
  }
};

export default seedPatients;
