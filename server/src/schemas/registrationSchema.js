import { z } from 'zod';

export const createRegistrationSchema = z.object({
  body: z.object({
    name: z.string().trim().min(3, 'Informe o nome completo.').max(120),
    email: z
      .string()
      .trim()
      .email('Informe um e-mail válido.')
      .optional()
      .or(z.literal('')),
    phone: z.string().trim().min(10, 'Informe um telefone válido.').max(20),
    age: z.coerce.number().int().min(12).max(100).optional(),
    city: z.string().trim().max(100).optional(),
    neighborhood: z.string().trim().max(100).optional(),
    message: z.string().trim().max(1000).optional(),
    projectSlug: z.string().trim().min(2).max(50),
  }),
});
