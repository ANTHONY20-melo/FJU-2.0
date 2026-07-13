import { Router } from 'express';
import { index, store } from '../controllers/registrationController.js';
import { validate } from '../middlewares/validate.js';
import { createRegistrationSchema } from '../schemas/registrationSchema.js';
import { authMiddleware, requireAdmin } from '../middlewares/authMiddleware.js';

const router = Router();
router.get('/', authMiddleware, requireAdmin, index);
router.post('/', validate(createRegistrationSchema), store);

export default router;
