import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect();

const PORT = 3000;

app.use("/");

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
