import DoctorSpecialty from "../../Models/DoctorSpecialty";

export const createSpecialty = async (specialtyData: { name: string }) => {
  const existingSpecialty = await DoctorSpecialty.findOne({
    name: specialtyData.name,
  });

  if (existingSpecialty) {
    throw new Error("Specialty already exists");
  }

  const newSpecialty = new DoctorSpecialty(specialtyData);

  return await newSpecialty.save();
};

export const getSpecialties = async () => {
  return await DoctorSpecialty.find();
};

export const updateSpecialtyById = async (
  id: string,
  updateData: {
    name: string;
  }
) => {
  const specialty = await DoctorSpecialty.findById(id);

  if (!specialty) {
    throw new Error("Specialty does not exit");
  }

  if (updateData.name && specialty.name != updateData.name) {
    const existingSpecialty = await DoctorSpecialty.findOne({
      name: updateData.name,
    });
    if (existingSpecialty) {
      throw new Error("Specialty already exists");
    }
    specialty.name = updateData.name;
  }

  const updatedSpecialty = await specialty.save();

  return updatedSpecialty;
};

export const deleteSpecialtyById = async (id: string) => {
  const specialty = await DoctorSpecialty.findByIdAndDelete(id);

  if (!specialty) {
    throw new Error("Specialty not found");
  }

  return specialty;
};
