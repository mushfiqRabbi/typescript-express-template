import express from 'express';
import type { Application, ErrorRequestHandler } from 'express';
import routes from './routes';
import { configureMiddleware } from './middlewares/configureMiddleware';
import { errorHandler } from './middlewares/errorHandler';

// Create Express app
const createApp = (): Application => {
  const app: Application = express();

  // Configure middleware
  configureMiddleware(app);

  // Register routes
  app.use('/', routes);

  // Global error handler
  app.use(errorHandler as ErrorRequestHandler);

  return app;
};

export default createApp;
