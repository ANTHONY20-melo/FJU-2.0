import { useEffect, useState } from 'react';
import { FaDirections, FaWhatsapp } from 'react-icons/fa';
import { api } from '../../services/api';

export function MapSection() {
  const [units, setUnits] = useState([]); const [selected, setSelected] = useState(null);
  useEffect(() => { api.get('/units').then(({ data }) => { setUnits(data.data); setSelected(data.data[0] || null); }).catch(() => {}); }, []);
  const mapUrl = selected ? `https://www.google.com/maps?q=${selected.latitude},${selected.longitude}&z=15&output=embed` : 'https://www.google.com/maps?q=Igreja%20Universal&output=embed';
  return <section id="mapa" className="home-map"><div className="home-map__copy"><p className="home-eyebrow">Unidades FJU</p><h2>Encontre a FJU mais próxima</h2><p>Selecione uma unidade para ver a localização e iniciar sua rota.</p><div className="units-list">{units.length ? units.map(unit => <button key={unit.id} className={selected?.id === unit.id ? 'is-selected' : ''} onClick={() => setSelected(unit)}><strong>{unit.name}</strong><span>{unit.city} · {unit.state}</span></button>) : <p className="units-empty">As unidades serão exibidas aqui assim que cadastradas pela equipe.</p>}</div>{selected && <div className="unit-actions"><a href={`https://www.google.com/maps/dir/?api=1&destination=${selected.latitude},${selected.longitude}`} target="_blank" rel="noreferrer"><FaDirections /> Traçar rota</a>{selected.whatsapp && <a className="whatsapp" href={`https://wa.me/${selected.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"><FaWhatsapp /> Falar no WhatsApp</a>}</div>}</div><iframe key={selected?.id || 'default'} title="Mapa de unidades FJU" src={mapUrl} loading="lazy" /></section>;
}
