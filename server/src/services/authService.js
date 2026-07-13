import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';
import { env } from '../config/env.js';

export async function authenticateUser(email, password) {
  const admin = await prisma.admin.findUnique({ where: { email } });
  const passwordIsValid = admin && await bcrypt.compare(password, admin.password);

  if (!passwordIsValid) {
    const error = new Error('E-mail ou senha inválidos.');
    error.statusCode = 401;
    throw error;
  }

  const token = jwt.sign(
    { sub: admin.id, email: admin.email, name: admin.name, role: 'admin' },
    env.JWT_SECRET,
    { expiresIn: env.JWT_EXPIRES_IN }
  );

  return { token, admin: { id: admin.id, name: admin.name, email: admin.email } };
}
