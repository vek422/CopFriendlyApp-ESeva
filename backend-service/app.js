import express, { urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import mobileRoutes from "./routes/mobile-routes/index.js";
const app = express();
const corsOptions = {
  origin: true,
  Credential: true,
};
app.use(morgan("common"));
app.use((req, res, next) => cors(corsOptions)(req, res, next));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.status(200).send("Hello There").end());
app.use("/mobile-app", mobileRoutes);
export default app;
