import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  if (localStorage.getItem('fju_admin_token')) return <Navigate to="/admin/dashboard" replace />;
  async function submit(event) {
    event.preventDefault(); setError(''); setLoading(true);
    try {
      const { data } = await api.post('/auth/login', form);
      localStorage.setItem('fju_admin_token', data.data.token);
      navigate(location.state?.from || '/admin/dashboard', { replace: true });
    } catch (err) { setError(err.response?.data?.message || 'Não foi possível entrar. Tente novamente.'); }
    finally { setLoading(false); }
  }
  return <main className="admin-login"><form onSubmit={submit} className="admin-login__card"><a href="/" className="admin-brand">FJU <span>Admin</span></a><h1>Acesso administrativo</h1><p>Entre para acompanhar as inscrições dos projetos.</p>{error && <div className="admin-error">{error}</div>}<label>E-mail<input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></label><label>Senha<input type="password" required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} /></label><button disabled={loading}>{loading ? 'Entrando…' : 'Entrar'}</button></form></main>;
}
