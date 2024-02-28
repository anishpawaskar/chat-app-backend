import express from "express";
import authentication from "./authentication";
const app = express.Router();

app.use("/auth", authentication);

export default app;
