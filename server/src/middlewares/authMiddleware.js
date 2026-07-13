import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export function authMiddleware(req, res, next) {
  const [scheme, token] = (req.headers.authorization || '').split(' ');
  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Autenticação necessária.' });
  }

  try {
    req.admin = jwt.verify(token, env.JWT_SECRET);
    return next();
  } catch {
    return res.status(401).json({ message: 'Sessão inválida ou expirada.' });
  }
}

export function requireAdmin(req, res, next) {
  if (req.admin?.role !== 'admin') return res.status(403).json({ message: 'Acesso administrativo necessário.' });
  return next();
}

export function requireVolunteer(req, res, next) {
  if (req.admin?.role !== 'volunteer') return res.status(403).json({ message: 'Acesso de voluntário necessário.' });
  return next();
}
