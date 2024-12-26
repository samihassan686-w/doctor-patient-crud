import DataSource from "../data-source";
import seedSpecialties from "./SpecialtySeeder";
import seedPatients from "./PatientSeeder";
import seedDoctors from "./DoctorSeeder";

const runSeeders = async () => {
  try {
    await DataSource.connect();
    console.log("Database connected for seeding.");

    console.log("Seeding specialties...");
    await seedSpecialties();

    console.log("Seeding patients...");
    await seedPatients();

    console.log("Seeding doctors...");
    await seedDoctors();

    console.log("Seeding completed successfully.");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error during seeding:", error.message);
    } else {
      console.error("Unknown error during seeding:", error);
    }
  } finally {
    await DataSource.disconnect();
    console.log("Database connection closed.");
  }
};

runSeeders();
