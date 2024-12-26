import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  specialty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor-Specialty",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Doctors = mongoose.model("Doctors", DoctorSchema);
export default Doctors;
