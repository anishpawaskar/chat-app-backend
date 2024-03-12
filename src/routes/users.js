import { Router } from "express";
import { fetchUsers } from "../controllers/users.js";
import { getUsersValidator } from "../middlewares/validators/users.js";
import { verifyToken } from "../utils/auth.js";

const router = Router();

router.get("/", verifyToken, getUsersValidator, fetchUsers);

export default router;
