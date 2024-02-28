import express from "express";
import authentication from "./authentication.js";
const app = express.Router();

app.use("/auth", authentication);

export default app;
