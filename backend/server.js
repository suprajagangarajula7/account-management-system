import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import accountRoutes from "./routes/accountRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/account", accountRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});