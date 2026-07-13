import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

const labels = { total: 'Total de inscrições', pending: 'Pendentes', contacted: 'Em contato', approved: 'Aprovadas', rejected: 'Recusadas' };
export function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => { api.get('/admin/dashboard').then(({ data }) => setStats(data.data)).catch(() => setError('Não foi possível carregar os indicadores.')); }, []);
  if (error) return <div className="admin-page"><p className="admin-error">{error}</p></div>;
  if (!stats) return <div className="admin-page">Carregando painel…</div>;
  return <div className="admin-page"><div className="admin-page__heading"><div><p className="admin-kicker">Painel administrativo</p><h1>Visão geral</h1></div><Link className="admin-primary" to="/admin/registrations">Ver inscrições</Link></div><section className="admin-stats">{Object.entries(labels).map(([key, label]) => <article key={key}><span>{label}</span><strong>{stats[key]}</strong></article>)}</section><section className="admin-panel"><h2>Inscrições recentes</h2><div className="admin-recent">{stats.recent.length ? stats.recent.map(item => <div key={item.id}><div><strong>{item.name}</strong><span>{item.project.name}</span></div><span className={`status status--${item.status}`}>{item.status}</span></div>) : <p>Ainda não há inscrições.</p>}</div></section></div>;
}
