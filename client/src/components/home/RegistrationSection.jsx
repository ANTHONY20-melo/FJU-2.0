import { useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectForm } from '../project/ProjectForm';

export function RegistrationSection() {
  const [slug, setSlug] = useState('esporte');
  return <section id="inscricao" className="home-registration"><div className="home-registration__box"><p className="home-eyebrow">Participar</p><h2>Faça parte da FJU</h2><p>Preencha seus dados e entraremos em contato.</p><label className="home-registration__project">Projeto de interesse<select value={slug} onChange={(event) => setSlug(event.target.value)}>{Object.values(projects).map((project) => <option key={project.slug} value={project.slug}>{project.name}</option>)}</select></label><ProjectForm project={projects[slug]} /></div></section>;
}
