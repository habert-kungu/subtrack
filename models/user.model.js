import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },

    email: {
      type: String,
      required: [true, "Email  is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [validator.isEmail, "Please fill a valid email address"],
      //match:[/\S+@\S+\.\S+/,'Please fill a valid email address']
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 6,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
