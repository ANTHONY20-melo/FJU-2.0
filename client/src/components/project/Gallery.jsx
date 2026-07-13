export function Gallery({ project }) {
  return (
    <section id="galeria" className="gallery-section reveal">
      <h2 style={{ color: project.theme.primary }}>Galeria</h2>
      <p>Confira alguns momentos do projeto {project.name}.</p>
      <div className="gallery-grid">
        {project.gallery.map((image, index) => (
          <article className="gallery-card" key={image}>
            <img src={image} alt={`${project.name} — momento ${index + 1}`} />
            <p>{project.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
