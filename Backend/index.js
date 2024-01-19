import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Book } from "./models/bookModel.js";
import booksRoutes from "./routes/booksRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/books", booksRoutes);

const port=5555;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(port, () => {
      console.log("Successfully connected");
    });
  })
  .catch((error) => {
    console.log(error);
  });
