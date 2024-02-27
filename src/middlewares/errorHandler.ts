import { ErrorRequestHandler } from "express";
import type { ApiResponse } from "@/utils/types";
import AppError from "@/utils/ApiError";

const errorHandler: ErrorRequestHandler<{}, ApiResponse<null>, {}, {}> = (
  error: AppError,
  _request,
  response,
  _next
) => {
  const errorResponse: ApiResponse<null> = {
    success: false,
    error: {
      message: error.message,
      details: error.details,
    },
  };
  response.status(error.statusCode).send(errorResponse);
};

export default errorHandler;
