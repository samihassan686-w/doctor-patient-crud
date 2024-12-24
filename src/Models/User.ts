import mongoose, { Document, Schema } from "mongoose";
import UserRole from "../Enums/UserRoleEnum";

interface IUser extends Document {
  fname: string;
  lname: string;
  email: string;
  password: string;
  role: UserRole;
  specialty?: mongoose.Types.ObjectId;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
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
  role: {
    type: String,
    required: true,
    enum: Object.values(UserRole),
  },
  specialty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor-Specialty",
    required: function (this: IUser) {
      return this.role === UserRole.Doctor;
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
