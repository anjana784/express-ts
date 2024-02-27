import dotenv from "dotenv";
dotenv.config();
import app from "@/app";
// import Database from "./utils/database";

const PORT = process.env["PORT"] || 8080;

// const database = new Database();

// database.connect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
