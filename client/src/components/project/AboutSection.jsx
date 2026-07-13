export function AboutSection({ project }) {
  return (
    <section id="sobre" className="about-section reveal">
      <h2 style={{ color: project.theme.primary }}> {project.aboutTitle} </h2>
      <p>{project.about}</p>
    </section>
  );
}
