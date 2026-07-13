import { createRegistration, listRegistrations } from '../services/registrationService.js';

export async function store(req, res, next) {
  try {
    const registration = await createRegistration(req.validated.body);

    return res.status(201).json({
      message: 'Inscrição realizada com sucesso.',
      data: registration,
    });
  } catch (error) {
    next(error);
  }
}

export async function index(req, res, next) {
  try {
    const registrations = await listRegistrations({
      projectSlug: req.query.project,
      status: req.query.status,
      search: req.query.search,
      page: req.query.page,
      limit: req.query.limit,
    });

    return res.json(registrations);
  } catch (error) {
    next(error);
  }
}
