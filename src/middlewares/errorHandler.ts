import type { Request, Response, NextFunction } from 'express';
import { HttpException } from './errorTypes';

interface ErrorResponse {
  success: boolean;
  status: number;
  message: string;
  timestamp: string;
  path: string;
  stack?: string;
}

export const errorHandler = (
  err: Error | HttpException,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  // Default error
  let status = 500;
  let message = 'Internal Server Error';

  // Check if it's our custom HttpException
  if (err instanceof HttpException) {
    status = err.status;
    message = err.message;
  }

  // Prepare error response
  const errorResponse: ErrorResponse = {
    success: false,
    status,
    message,
    timestamp: new Date().toISOString(),
    path: req.path,
  };

  // Add stack trace in development environment
  if (process.env['NODE_ENV'] === 'development' && err.stack) {
    errorResponse.stack = err.stack;
  }

  // Log the error
  console.error(
    `[${new Date().toISOString()}] ${req.method} ${req.path} - ${status} - ${message}`
  );
  if (err.stack) {
    console.error(err.stack);
  }

  // Send error response
  res.status(status).json(errorResponse);
};
