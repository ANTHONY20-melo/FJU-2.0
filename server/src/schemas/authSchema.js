import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Informe um e-mail válido.').transform((value) => value.toLowerCase().trim()),
  password: z.string().min(1, 'Informe a senha.'),
});
