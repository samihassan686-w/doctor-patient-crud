import * as SpecialtyCrudService from "../Services/Specialty/crud.service";
import { AppError } from "../Middlewares/error.middleware";

const seedSpecialties = async () => {
  const specialties = [
    { name: "Cardiologist" },
    { name: "Neurologist" },
    { name: "Pediatrician" },
  ];

  for (const specialty of specialties) {
    try {
      await SpecialtyCrudService.createSpecialty(specialty);
      console.log(`Specialty ${specialty.name} created successfully.`);
    } catch (error) {
      if (error instanceof AppError) {
        console.error(
          `Operational error creating specialty ${specialty.name}:`,
          error.message
        );
      } else if (error instanceof Error) {
        console.error(
          `Unexpected error creating specialty ${specialty.name}:`,
          error.message
        );
      } else {
        console.error(
          `Unknown error creating specialty ${specialty.name}:`,
          error
        );
      }
    }
  }
};

export default seedSpecialties;
