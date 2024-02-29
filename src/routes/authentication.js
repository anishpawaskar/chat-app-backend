import { Router } from "express";
import {
  loginController,
  regitserController,
  validateUsername,
} from "../controllers/authentication.js";

const router = Router();

router.post("/login", loginController);

router.post("/register", regitserController);

router.post("/check-username", validateUsername);

export default router;
