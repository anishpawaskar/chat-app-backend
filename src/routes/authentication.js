import { Router } from "express";
import {
  loginController,
  regitserController,
  validateUsername,
} from "../controllers/authentication.js";
import {
  validateLoginBody,
  validateRegisterBody,
  validateUsernameBody,
} from "../middlewares/validators/authentication.js";

const router = Router();

router.post("/login", validateLoginBody, loginController);
router.post("/register", validateRegisterBody, regitserController);
router.post("/check-username", validateUsernameBody, validateUsername);

export default router;
