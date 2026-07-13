import { Router } from 'express';

import projectRoutes from './projectRoutes.js';
import registrationRoutes from './registrationRoutes.js';
import authRoutes from './authRoutes.js';
import adminRoutes from './adminRoutes.js';
import eventRoutes from './eventRoutes.js';
import unitRoutes from './unitRoutes.js';
import volunteerRoutes from './volunteerRoutes.js';

const router = Router();

router.use('/projects', projectRoutes);
router.use('/registrations', registrationRoutes);
router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/events', eventRoutes);
router.use('/units', unitRoutes);
router.use('/volunteers', volunteerRoutes);

export default router;
