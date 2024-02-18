import { Router } from "express";
import { login, register } from "../../controllers/mobile-app/AppUser.js";
const authRoutes = Router();
authRoutes.post("/login", login);
authRoutes.post("/register", register);
export default authRoutes;
