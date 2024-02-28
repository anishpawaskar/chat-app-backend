import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    await connect(mongoURI);
    console.log(`Connected to MongoDB🚀`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
