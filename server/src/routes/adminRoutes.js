import { Router } from 'express';
import { dashboard, exportRegistrations, updateRegistrationStatus } from '../controllers/adminController.js';
import { authMiddleware, requireAdmin } from '../middlewares/authMiddleware.js';
import { validate } from '../middlewares/validate.js';
import { updateRegistrationStatusSchema } from '../schemas/adminSchema.js';

const router = Router();
router.use(authMiddleware);
router.use(requireAdmin);
router.get('/dashboard', dashboard);
router.get('/registrations/export', exportRegistrations);
router.patch('/registrations/:id/status', validate(updateRegistrationStatusSchema), updateRegistrationStatus);

export default router;
