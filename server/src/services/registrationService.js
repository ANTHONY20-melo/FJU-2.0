import prisma from '../lib/prisma.js';

export async function createRegistration(data) {
  const { projectSlug, ...registrationData } = data;

  const project = await prisma.project.findUnique({
    where: {
      slug: projectSlug,
    },
    select: {
      id: true,
      active: true,
    },
  });

  if (!project) {
    const error = new Error('Projeto não encontrado.');
    error.statusCode = 404;
    throw error;
  }

  if (!project.active) {
    const error = new Error('As inscrições deste projeto estão fechadas.');
    error.statusCode = 400;
    throw error;
  }

  return prisma.registration.create({
    data: {
      ...registrationData,
      email: registrationData.email || null,
      projectId: project.id,
    },
    select: {
      id: true,
      name: true,
      status: true,
      createdAt: true,
      project: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
  });
}

export async function listRegistrations({ projectSlug, status, search, page = 1, limit = 20 }) {
  const currentPage = Math.max(Number(page) || 1, 1);
  const take = Math.min(Math.max(Number(limit) || 20, 1), 10000);
  const where = {
    project: projectSlug ? { slug: projectSlug } : undefined,
    status: status || undefined,
    OR: search ? [
      { name: { contains: search, mode: 'insensitive' } },
      { email: { contains: search, mode: 'insensitive' } },
      { phone: { contains: search, mode: 'insensitive' } },
    ] : undefined,
  };
  const [data, total] = await prisma.$transaction([
    prisma.registration.findMany({ where, include: { project: { select: { name: true, slug: true } } }, orderBy: { createdAt: 'desc' }, skip: (currentPage - 1) * take, take }),
    prisma.registration.count({ where }),
  ]);
  return { data, meta: { page: currentPage, limit: take, total, pages: Math.max(Math.ceil(total / take), 1) } };
}

export async function getDashboardStats() {
  const [total, pending, contacted, approved, rejected, recent] = await Promise.all([
    prisma.registration.count(), prisma.registration.count({ where: { status: 'PENDING' } }),
    prisma.registration.count({ where: { status: 'CONTACTED' } }), prisma.registration.count({ where: { status: 'APPROVED' } }),
    prisma.registration.count({ where: { status: 'REJECTED' } }),
    prisma.registration.findMany({ take: 5, orderBy: { createdAt: 'desc' }, include: { project: { select: { name: true } } } }),
  ]);
  return { total, pending, contacted, approved, rejected, recent };
}

export async function updateRegistrationStatus(id, status) {
  try { return await prisma.registration.update({ where: { id }, data: { status }, include: { project: { select: { name: true, slug: true } } } }); }
  catch (error) { if (error.code === 'P2025') { error.statusCode = 404; error.message = 'Inscrição não encontrada.'; } throw error; }
}
