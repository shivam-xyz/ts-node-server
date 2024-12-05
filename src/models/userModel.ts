import mongoose from "mongoose";
import userSchema from "../schemas/userSchema";
import { IUser } from "../interfaces/userInterfaces";

const User = mongoose.model<IUser>('User', userSchema);

export default User;