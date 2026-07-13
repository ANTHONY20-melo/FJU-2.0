import { FaInstagram, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';

export function Footer() {
  return <footer className="site-footer"><div><strong>FJU</strong><span>Juntos e Misturados.</span></div><p>© {new Date().getFullYear()} Força Jovem Universal</p><nav aria-label="Links sociais"><a href="https://www.instagram.com/forcajovemuniversal" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a><a href="https://www.youtube.com/@ForcaJovemUniversal" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a><a href="https://www.google.com/maps/search/Igreja+Universal" target="_blank" rel="noreferrer" aria-label="Localização"><FaMapMarkerAlt /></a></nav></footer>;
}
