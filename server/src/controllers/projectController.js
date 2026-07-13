import prisma from '../lib/prisma.js';

export async function index(req, res, next) {
  try {
    const projects = await prisma.project.findMany({
      where: { active: true },
      orderBy: { name: 'asc' },
    });

    return res.json({ data: projects });
  } catch (error) {
    next(error);
  }
}

export async function show(req, res, next) {
  try {
    const project = await prisma.project.findUnique({
      where: { slug: req.params.slug },
    });

    if (!project) {
      return res.status(404).json({ message: 'Projeto não encontrado.' });
    }

    return res.json({ data: project });
  } catch (error) {
    next(error);
  }
}
