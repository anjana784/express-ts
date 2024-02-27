export type ApiResponse<T> =
  | { success: true; data: T }
  | {
      success: false;
      error: {
        message: ApiResponseErros;
        details: string;
      };
    };

export type ApiResponseErros =
  | "Bad Request"
  | "Internal Error"
  | "Unauthorized"
  | "Forbidden"
  | "Not Found";
