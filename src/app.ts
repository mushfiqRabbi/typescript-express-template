import express from 'express';
import type { Application, Request, Response } from 'express';
import { env } from './config/env';

// Create Express app
const createApp = (): Application => {
  const app: Application = express();

  // Middleware
  app.use(express.json());

  // Routes
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });

  // Health check endpoint
  app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      environment: env.NODE_ENV
    });
  });

  return app;
};

export default createApp;