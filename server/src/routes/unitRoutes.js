import { Router } from 'express';
import prisma from '../lib/prisma.js';

const router = Router();
router.get('/', async (req, res, next) => {
  try { res.json({ data: await prisma.unit.findMany({ where: { active: true }, orderBy: [{ state: 'asc' }, { city: 'asc' }, { name: 'asc' }] }) }); }
  catch (error) { next(error); }
});
export default router;
