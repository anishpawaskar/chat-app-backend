import { Router } from "express";
import {
  handleUserRegistration,
  validateUsername,
} from "../controllers/authentication.js";

const router = Router();

router.post("/login", (req, res) => {
  console.log("Login kar");
  res.send("Successfully login!");
});

router.post("/register", handleUserRegistration);

router.post("/check-username", validateUsername);

export default router;
