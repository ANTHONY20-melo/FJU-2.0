import { Router } from 'express';
import prisma from '../lib/prisma.js';

const router = Router();
router.get('/next', async (req, res, next) => {
  try {
    const event = await prisma.event.findFirst({ where: { date: { gte: new Date() } }, include: { project: { select: { name: true, slug: true } } }, orderBy: { date: 'asc' } });
    res.json({ data: event });
  } catch (error) { next(error); }
});
router.get('/', async (req, res, next) => {
  try { res.json({ data: await prisma.event.findMany({ where: { date: { gte: new Date() } }, include: { project: { select: { name: true, slug: true } } }, orderBy: { date: 'asc' }, take: 12 }) }); }
  catch (error) { next(error); }
});
export default router;
