import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import './ProjectForm.css';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  age: '',
  city: '',
  neighborhood: '',
  message: '',
};

export function ProjectForm({ project }) {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    setError('');
    setLoading(true);

    try {
      await api.post('/registrations', {
        ...form,
        age: Number(form.age),
        projectSlug: project.slug,
      });

      navigate(`/inscricao/sucesso/${project.slug}`);
    } catch (error) {
      console.error(error);
      const message =
        error.response?.data?.message ||
        'Não foi possível realizar a inscrição.';

      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <label>
        Nome completo
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          required
          minLength={3}
        />
      </label>

      <label>
        WhatsApp
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={(event) => setForm({ ...form, phone: event.target.value })}
          required
        />
      </label>

      <div className="form-row">
        <label>
          Idade
          <input
            type="number"
            name="age"
            min="12"
            max="100"
            value={form.age}
            onChange={(event) => setForm({ ...form, age: event.target.value })}
          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Cidade
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={(event) => setForm({ ...form, city: event.target.value })}
          />
        </label>

        <label>
          Bairro
          <input
            type="text"
            name="neighborhood"
            value={form.neighborhood}
            onChange={(event) => setForm({ ...form, neighborhood: event.target.value })}
          />
        </label>
      </div>

      <label>
        Mensagem
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
        />
      </label>

      {error && <div className="form-error" role="alert">{error}</div>}

      <button
        type="submit"
        disabled={loading}
        style={{ background: project.theme.primary }}
      >
        {loading ? 'Enviando...' : 'Enviar inscrição'}
      </button>
    </form>
  );
}
