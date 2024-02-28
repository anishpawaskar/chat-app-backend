import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  console.log("Login kar");
  res.send("Successfully login!");
});

router.post("/register", (req, res) => {
  res.send("User register successfully");
});

export default router;
