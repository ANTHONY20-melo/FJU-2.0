import { HomeHero } from '../components/home/HomeHero';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Sidebar } from '../components/layout/Sidebar';
import { MapSection } from '../components/home/MapSection';
import { RegistrationSection } from '../components/home/RegistrationSection';
import { NextEvent } from '../components/home/NextEvent';

export function HomePage() {
  return (
    <main className="home-page">
      <Sidebar />
      <div className="home-page__content">
        <HomeHero />
        <NextEvent />

      <section id="projetos" className="home-projects">
        <h2>Nossos Projetos</h2>

        <div className="home-projects__grid">
          {Object.entries(projects).map(([slug, project]) => (
            <Link
              key={slug}
              to={`/projetos/${slug}`}
              className="home-project-card"
              style={{ '--project-color': project.theme.primary }}
            >
              <img src={project.logo} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.highlight || project.description}</p>
            </Link>
          ))}
        </div>
        </section>
        <MapSection />
        <RegistrationSection />
      </div>
    </main>
  );
}
