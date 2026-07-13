export function ProjectHero({ project }) {
  return (
    <section
      id="inicio"
      className="project-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${project.hero || project.logo}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="project-hero__content reveal">
        <img src={project.logo} alt={project.name} />
        <h1>
          {project.title}{' '}
          <span>{project.highlight}</span>
        </h1>
        <p>{project.description}</p>
        <a href="#inscricao" className="project-hero__button">
          Quero Fazer Parte
        </a>
      </div>
    </section>
  );
}
