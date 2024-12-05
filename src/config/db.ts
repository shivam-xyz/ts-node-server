import mongoose from "mongoose";

const DB_URI = "DB_URL_HERE";

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to Database", error);
        process.exit(1);
    }
}