import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const projects = [
    {
      name: 'Esporte',
      slug: 'esporte',
      slogan: 'Nascidos para Vencer.',
      description:
        'O projeto Esportes FJU incentiva a prática esportiva como ferramenta de inclusão e saúde.',
      logo: '/images/ESPORTES.webp',
      active: true,
    },
    {
      name: 'Cultura',
      slug: 'cultura',
      slogan: 'A arte de salvar.',
      description:
        'O projeto Cultura FJU desenvolve talentos artísticos através da dança, teatro, música e audiovisual.',
      logo: '/images/CULTURA.webp',
      active: true,
    },
    {
      name: 'Mídia',
      slug: 'midia',
      slogan: 'Comunicando a Fé.',
      description:
        'O projeto Mídia FJU utiliza comunicação, jornalismo, design, fotografia e audiovisual.',
      logo: '/images/MIDIA_1.webp',
      active: true,
    },
    {
      name: 'Universitários',
      slug: 'universitarios',
      slogan: 'Formando Visionários.',
      description:
        'O projeto Universitários oferece apoio acadêmico, orientação profissional e desenvolvimento.',
      logo: '/images/UNIVERSITARIOS.webp',
      active: true,
    },
    {
      name: 'Uniforça',
      slug: 'uniforca',
      slogan: 'Unidos Somos Mais Fortes.',
      description:
        'O Uniforça atua no apoio logístico, organização e infraestrutura.',
      logo: '/images/UNIFORCA.webp',
      active: true,
    },
    {
      name: 'Atalaia',
      slug: 'atalaia',
      slogan: 'Somos Todos Atalaias.',
      description:
        'O Atalaia atua levando mensagens de fé e esperança aos jovens.',
      logo: '/images/ATALAIA.webp',
      active: true,
    },
    {
      name: 'Arcanjos',
      slug: 'arcanjos',
      slogan: 'Guardiões da Fé.',
      description:
        'O projeto Arcanjos atua na segurança, organização e acolhimento.',
      logo: '/images/ARCANJOS.webp',
      active: true,
    },
    {
      name: 'Assistentes',
      slug: 'assistentes',
      slogan: 'Juntos Ajudamos Mais.',
      description:
        'O projeto Assistentes atua na organização, logística e apoio.',
      logo: '/images/ASSISTENTES (1).webp',
      active: true,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }

  const email = (process.env.ADMIN_EMAIL || 'admin@fju.local').toLowerCase();
  if (process.env.NODE_ENV === 'production' && !process.env.ADMIN_PASSWORD) {
    throw new Error('Defina ADMIN_PASSWORD antes de executar o seed em produção.');
  }
  const password = process.env.ADMIN_PASSWORD || 'TroqueEstaSenha123!';
  await prisma.admin.upsert({
    where: { email },
    update: { name: process.env.ADMIN_NAME || 'Administrador FJU', password: await bcrypt.hash(password, 12) },
    create: { name: process.env.ADMIN_NAME || 'Administrador FJU', email, password: await bcrypt.hash(password, 12) },
  });
  console.log(`Administrador preparado: ${email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
