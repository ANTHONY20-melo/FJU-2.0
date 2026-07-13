import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import prisma from '../lib/prisma.js';
import { env } from '../config/env.js';
import { authMiddleware, requireVolunteer } from '../middlewares/authMiddleware.js';
import { validate } from '../middlewares/validate.js';

const router = Router();
const registerSchema = z.object({ name: z.string().min(3), email: z.string().email().transform(v => v.toLowerCase().trim()), phone: z.string().min(8), password: z.string().min(8), projectSlug: z.string().optional() });
const loginSchema = z.object({ email: z.string().email().transform(v => v.toLowerCase().trim()), password: z.string().min(1) });
const session = (volunteer) => ({ token: jwt.sign({ sub: volunteer.id, email: volunteer.email, name: volunteer.name, role: 'volunteer' }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN }), volunteer: { id: volunteer.id, name: volunteer.name, email: volunteer.email } });

router.post('/register', validate(registerSchema), async (req, res, next) => { try {
  const { projectSlug, password, ...data } = req.validated.body;
  const project = projectSlug ? await prisma.project.findUnique({ where: { slug: projectSlug }, select: { id: true } }) : null;
  const volunteer = await prisma.volunteer.create({ data: { ...data, password: await bcrypt.hash(password, 12), projectId: project?.id } });
  res.status(201).json({ data: session(volunteer) });
} catch (error) { if (error.code === 'P2002') { error.statusCode = 409; error.message = 'Este e-mail já possui cadastro.'; } next(error); } });
router.post('/login', validate(loginSchema), async (req, res, next) => { try {
  const volunteer = await prisma.volunteer.findUnique({ where: { email: req.validated.body.email } });
  if (!volunteer || !(await bcrypt.compare(req.validated.body.password, volunteer.password))) return res.status(401).json({ message: 'E-mail ou senha inválidos.' });
  res.json({ data: session(volunteer) });
} catch (error) { next(error); } });
router.get('/me', authMiddleware, requireVolunteer, async (req, res, next) => { try {
  const volunteer = await prisma.volunteer.findUnique({ where: { id: req.admin.sub }, select: { id: true, name: true, email: true, phone: true, project: { select: { name: true } }, attendances: { include: { event: true }, orderBy: { presentAt: 'desc' } }, certificates: { orderBy: { issuedAt: 'desc' } } } });
  res.json({ data: volunteer });
} catch (error) { next(error); } });
export default router;
