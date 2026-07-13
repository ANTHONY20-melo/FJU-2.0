import { Link } from 'react-router-dom';
import { FaHome, FaMapMarkedAlt, FaThLarge, FaUserCheck } from 'react-icons/fa';

export function Sidebar() {
  return (
    <aside className="home-sidebar">
      <a className="home-sidebar__logo" href="#inicio"><img src="/images/coordenador.webp" alt="FJU" /></a>
      <nav aria-label="Navegação principal">
        <a href="#inicio"><FaHome /> Início</a>
        <a href="#projetos"><FaThLarge /> Projetos</a>
        <a href="#mapa"><FaMapMarkedAlt /> Mapa</a>
        <a className="home-sidebar__cta" href="#inscricao"><FaUserCheck /> Fazer parte</a>
        <Link to="/voluntario"><FaUserCheck /> Sou voluntário</Link>
      </nav>
      <small>FJU Oficial</small>
    </aside>
  );
}
