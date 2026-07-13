import { Link } from 'react-router-dom';

export default function ProjectSidebar({ project }) {
  return <aside className="project-sidebar"><div className="project-sidebar__header"><img src={project.logo} alt={project.name} /><h2>{project.sidebarName || project.name}</h2></div><nav className="project-sidebar__nav"><a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#atividades">Atividades</a><a href="#galeria">Galeria</a><a href="#inscricao">Inscrição</a></nav><Link className="project-sidebar__back" to="/">Voltar para o início</Link></aside>;
}
