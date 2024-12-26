import mongoose from "mongoose";

const schema = mongoose.Schema;

const DoctorSpecialtySchema = new schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const DoctorSpecialty = mongoose.model(
  "Doctor-Specialty",
  DoctorSpecialtySchema
);
export default DoctorSpecialty;
