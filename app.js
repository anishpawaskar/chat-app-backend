import express from "express";
import dotenv from "dotenv";
import indexRouter from "./src/routes/index.js";
import { connectDB } from "./src/config/database.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`The server is running on PORT: ${PORT}`);
});
