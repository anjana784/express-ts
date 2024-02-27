import express, { Application, json } from "express";
import cors from "cors";
import errorHandler from "@/middlewares/errorHandler";

const app: Application = express();

/**
 * Global Middlewares
 */
app.use(json());
app.use(
  cors({
    credentials: true,
    origin: process.env["CLIENT_URL"],
  })
);

/**
 * Routes
 */
app.get("/api/v1/", (_request, response) => {
  response.send("Hello, World!");
});

/**
 * Error Handlers
 */

// 500
app.use(errorHandler);

// 404
app.use((_request, response, _next) => {
  response.status(404).send("Not Found");
});

export default app;
