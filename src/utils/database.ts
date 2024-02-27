import mongoose from "mongoose";

class Database {
  private databaseURL: string;

  constructor() {
    if (process.env["MONGO_URI"]) {
      this.databaseURL = process.env["MONGO_URI"].replace(
        "<password>",
        process.env["DATABASE_PASSWORD"] || ""
      );
    } else {
      throw new Error("Database URL not found");
    }
  }

  public async connect() {
    try {
      await mongoose.connect(this.databaseURL);
      console.log("Database connected");
    } catch (error) {
      console.log(error);
      throw new Error("Database connection failed");
    }
  }
}

export default Database;
