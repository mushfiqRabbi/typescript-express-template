import { Router } from 'express';
import type { Request, Response } from 'express';
import { env } from '../config/env';

const router = Router();

// Main route
router.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

// Health check endpoint
router.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: env.NODE_ENV,
  });
});

export default router;
