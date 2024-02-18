import mongoose from "mongoose";
import { Schema } from "mongoose";

const AppUserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      require: true,
    },
    lastName: {
      type: String,
      trim: true,
      require: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AppUser = mongoose.model("AppUser", AppUserSchema);

export default AppUser;
