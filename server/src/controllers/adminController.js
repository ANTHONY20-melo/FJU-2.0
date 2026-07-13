import { Parser } from 'json2csv';
import { getDashboardStats, listRegistrations, updateRegistrationStatus as setRegistrationStatus } from '../services/registrationService.js';

function getFilters(query) {
  return {
    projectSlug: query.project,
    status: query.status,
    search: query.search,
    page: query.page,
    limit: query.limit,
  };
}

export async function dashboard(req, res, next) {
  try {
    res.json({ data: await getDashboardStats() });
  } catch (error) { next(error); }
}

export async function exportRegistrations(req, res, next) {
  try {
    const { data } = await listRegistrations({ ...getFilters(req.query), page: 1, limit: 10000 });
    const parser = new Parser({ fields: [
      { label: 'Nome', value: 'name' }, { label: 'E-mail', value: 'email' },
      { label: 'Telefone', value: 'phone' }, { label: 'Projeto', value: 'project.name' },
      { label: 'Status', value: 'status' }, { label: 'Cidade', value: 'city' },
      { label: 'Bairro', value: 'neighborhood' }, { label: 'Data de inscrição', value: row => row.createdAt.toISOString() },
    ] });
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="inscricoes-fju.csv"');
    res.send(`\uFEFF${parser.parse(data)}`);
  } catch (error) { next(error); }
}

export async function updateRegistrationStatus(req, res, next) {
  try {
    const registration = await setRegistrationStatus(req.params.id, req.validated.body.status);
    res.json({ data: registration });
  } catch (error) { next(error); }
}
