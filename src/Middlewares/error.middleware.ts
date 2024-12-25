import { Request, Response, NextFunction } from "express";

class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.isOperational) {
    res.status(err.statusCode || 500).json({
      status: "error",
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  console.error(err);
  res.status(500).json({
    status: "error",
    message: "Something went wrong, please try again later",
  });
};

export { AppError, errorHandler };
