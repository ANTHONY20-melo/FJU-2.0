import { z } from 'zod';

export const updateRegistrationStatusSchema = z.object({
  status: z.enum(['PENDING', 'CONTACTED', 'APPROVED', 'REJECTED']),
});
