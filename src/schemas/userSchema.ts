import { Schema } from 'mongoose';

const userSchema : Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number, required: true }
    },
    { timestamps: true }
);

export default userSchema;