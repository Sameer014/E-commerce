import mongoose from "mongoose";

const connectDB = async () => {
        try {
               const conn = await mongoose.connect(process.env.MONGO_URI);
               console.log(`MongoDB connected: ${conn.connection.host}`.cyan.bold.underline);
        }   catch (error) {
                  console.error(`Error: ${error.message}`.red.underline);
                  process.exit(1);
        }
};

export default connectDB;
