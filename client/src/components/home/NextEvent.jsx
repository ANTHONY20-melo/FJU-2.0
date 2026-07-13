import { useEffect, useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { api } from '../../services/api';

function remaining(date) { const ms = new Date(date) - new Date(); if (ms <= 0) return null; return { dias: Math.floor(ms / 86400000), horas: Math.floor(ms / 3600000) % 24, min: Math.floor(ms / 60000) % 60 }; }
export function NextEvent() {
  const [event, setEvent] = useState(undefined); const [time, setTime] = useState(null);
  useEffect(() => { api.get('/events/next').then(({ data }) => setEvent(data.data)).catch(() => setEvent(null)); }, []);
  useEffect(() => { if (!event?.date) return; const update = () => setTime(remaining(event.date)); update(); const id = setInterval(update, 30000); return () => clearInterval(id); }, [event]);
  if (event === undefined) return null;
  if (!event) return <section className="next-event next-event--empty"><p className="home-eyebrow">Agenda FJU</p><h2>Próximo evento em breve</h2><p>A programação está sendo atualizada. Acompanhe nossas redes para não perder nada.</p></section>;
  return <section className="next-event"><div><p className="home-eyebrow">Próximo evento FJU</p><h2>{event.title}</h2><p>{event.description}</p><span><FaCalendarAlt /> {new Date(event.date).toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })}</span><span><FaMapMarkerAlt /> {event.location || 'Local a confirmar'}</span></div>{time && <div className="countdown" aria-label="Contagem regressiva"><div><strong>{time.dias}</strong><small>dias</small></div><div><strong>{String(time.horas).padStart(2, '0')}</strong><small>horas</small></div><div><strong>{String(time.min).padStart(2, '0')}</strong><small>min</small></div></div>}</section>;
}
