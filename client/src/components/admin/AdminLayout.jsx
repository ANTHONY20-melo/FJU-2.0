import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export function AdminLayout() {
  const navigate = useNavigate();
  const logout = () => { localStorage.removeItem('fju_admin_token'); navigate('/admin/login'); };
  return <div className="admin-shell"><aside className="admin-sidebar"><a className="admin-brand" href="/">FJU <span>Admin</span></a><nav><NavLink to="/admin/dashboard">Visão geral</NavLink><NavLink to="/admin/registrations">Inscrições</NavLink><NavLink to="/admin/projects">Projetos</NavLink></nav><button onClick={logout}>Sair</button></aside><main className="admin-content"><Outlet /></main></div>;
}
