import type { Application } from 'express';
import express from 'express';

export const configureMiddleware = (app: Application): void => {
  // Built-in middleware
  app.use(express.json());

  // Add other middleware configurations here as needed
  // Example:
  // app.use(express.urlencoded({ extended: true }));
  // app.use(cookieParser());
  // app.use(cors());
};
