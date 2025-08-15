import { Router } from 'express';
import mainRoutes from './main.routes';

const router = Router();

// Register all routes
router.use('/', mainRoutes);

export default router;
