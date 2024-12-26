import * as DoctorCrudService from "../Services/Doctor/crud.service";
import { AppError } from "../Middlewares/error.middleware";

const seedDoctors = async () => {
  const doctors = [
    {
      fname: "Alice",
      lname: "Johnson",
      email: "alice.johnson@example.com",
      password: "securePassword1",
      specialty: "676cf49126861385b8ef4b66", // Cardiologist
    },
    {
      fname: "Bob",
      lname: "Smith",
      email: "bob.smith@example.com",
      password: "securePassword2",
      specialty: "676cf49126861385b8ef4b6a", // Neurologist
    },
    {
      fname: "Clara",
      lname: "Brown",
      email: "clara.brown@example.com",
      password: "securePassword3",
      specialty: "676cf49226861385b8ef4b6d", // Pediatrician
    },
  ];

  for (const doctor of doctors) {
    try {
      await DoctorCrudService.createDoctor(doctor);
      console.log(`Doctor ${doctor.email} created successfully.`);
    } catch (error) {
      if (error instanceof AppError) {
        console.error(
          `Operational error creating doctor ${doctor.email}:`,
          error.message
        );
      } else if (error instanceof Error) {
        console.error(
          `Unexpected error creating doctor ${doctor.email}:`,
          error.message
        );
      } else {
        console.error(`Unknown error creating doctor ${doctor.email}:`, error);
      }
    }
  }
};

export default seedDoctors;
