import authRoutes from "./authRoutes.js";
import { Router } from "express";
const mobileRoutes = Router();
mobileRoutes.use("/auth", authRoutes);
export default mobileRoutes;
