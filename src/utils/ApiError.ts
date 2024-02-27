import { ApiResponseErros } from "./types";

class ApiError extends Error {
  public override readonly message: ApiResponseErros;
  public readonly statusCode: number;
  public readonly details: string;

  constructor(message: ApiResponseErros, statusCode = 400, details: string) {
    super(message);

    this.message = message;
    this.statusCode = statusCode;
    this.details = details;
  }
}

export default ApiError;
