import app from "./app.js";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on("error", (err) => {
  console.err("Error -> ", err);
});

const PORT = process.env.PORT || 7877;
app.set("port", PORT);

const server = app.listen(app.get("port"), () => {
  console.log(`Express running : PORT ${server.address().port}`);
});
