import express from "express";
import authentication from "./authentication.js";
import users from "./users.js";
const app = express.Router();

app.use("/auth", authentication);
app.use("/users", users);

export default app;
