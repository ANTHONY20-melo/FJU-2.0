import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectHero } from '../components/project/ProjectHero';
import { AboutSection } from '../components/project/AboutSection';
import { ActivitiesGrid } from '../components/project/ActivitiesGrid';
import { Gallery } from '../components/project/Gallery';
import { ProjectForm } from '../components/project/ProjectForm';
import ProjectSidebar from '../components/layout/ProjectSidebar';

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div
      className="project-page"
      style={{
        '--primary': project.theme.primary,
        '--secondary': project.theme.secondary,
        '--background': project.theme.section
      }}
    >
      <ProjectSidebar project={project} />
      <main className="project-page__content">
        <ProjectHero project={project} />
        <AboutSection project={project} />
        <ActivitiesGrid activities={project.activities} title={project.activitiesTitle} />
        <Gallery project={project} />
        <section id="inscricao" className="form-section reveal">
          <h2 style={{ color: project.theme.primary }}>Inscrição</h2>
          <ProjectForm project={project} />
        </section>
      </main>
    </div>
  );
}
