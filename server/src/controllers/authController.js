import { authenticateUser } from '../services/authService.js';

export async function login(req, res, next) {
  try {
    const session = await authenticateUser(req.validated.body.email, req.validated.body.password);
    res.json({ data: session });
  } catch (error) {
    next(error);
  }
}
