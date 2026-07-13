import { Link, Navigate, useParams } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

import { projects } from '../data/projects';
import { successMessages } from '../data/successMessages';
import './SuccessPage.css';

export function SuccessPage() {
  const { slug } = useParams();
  const project = projects[slug];
  const content = successMessages[slug];

  if (!project || !content) {
    return <Navigate to="/" replace />;
  }

  return (
    <main
      className="success-page"
      style={{
        '--success-primary': project.theme.primary,
        '--success-secondary': project.theme.secondary,
      }}
    >
      <section className="success-card">
        <div className="success-line" />

        <FaCheckCircle className="success-icon" />

        <img src={project.logo} alt={project.name} />

        <h1>{content.title}</h1>

        <p>{content.message}</p>

        <p>
          Fique atento ao seu WhatsApp, pois o contato será realizado pelos
          responsáveis.
        </p>

        <Link to="/">Voltar ao início</Link>
      </section>
    </main>
  );
}
