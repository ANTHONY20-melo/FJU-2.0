import { useEffect, useState } from 'react';
import { api } from '../../services/api';
export function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  useEffect(() => { api.get('/projects').then(({ data }) => setProjects(data.data)); }, []);
  return <div className="admin-page"><div className="admin-page__heading"><div><p className="admin-kicker">Projetos</p><h1>Projetos ativos</h1></div></div><div className="admin-projects">{projects.map(project => <article key={project.id}>{project.logo && <img src={project.logo} alt="" />}<div><h2>{project.name}</h2><p>{project.slogan}</p><a href={`/projetos/${project.slug}`}>Ver página pública</a></div></article>)}</div></div>;
}
