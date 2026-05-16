import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    invitados: '',
    mensaje: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const titleRef  = useScrollAnimation({ variant: 'fade-up' });
  const formRef   = useScrollAnimation({ variant: 'fade-up', delay: 150 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    if (!formData.nombre || !formData.email || !formData.telefono || !formData.tipoEvento || !formData.invitados) {
      setStatus({ type: 'error', message: 'Por favor, completa todos los campos obligatorios.' });
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Por favor, ingresa un correo electrónico válido.' });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: '¡Solicitud enviada con éxito! Te contactaremos pronto.' });
        setFormData({ nombre: '', email: '', telefono: '', tipoEvento: '', invitados: '', mensaje: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Error al enviar. Por favor, intenta nuevamente.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Error de conexión. Por favor, verifica que el servidor esté funcionando.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-coffe-cream">
      <div className="container-custom">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-coffe-dark mb-4">
            ¿Listo para <span className="text-coffe-primary">elevar</span> tu evento?
          </h2>
          <div className="w-24 h-1 bg-coffe-accent mx-auto"></div>
          <p className="text-coffe-dark/70 mt-4 max-w-2xl mx-auto">
            Cuéntanos sobre tu evento y te enviaremos una propuesta personalizada en menos de 24 horas
          </p>
        </div>

        <div ref={formRef} className="max-w-2xl mx-auto bg-coffe-light rounded-xl shadow-xl p-8">
          {status.message && (
            <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
              status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {status.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-coffe-dark font-semibold mb-2">Nombre completo *</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-coffe-cream rounded-lg focus:outline-none focus:border-coffe-accent transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-coffe-dark font-semibold mb-2">Correo electrónico *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-coffe-cream rounded-lg focus:outline-none focus:border-coffe-accent transition-colors"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div>
              <label className="block text-coffe-dark font-semibold mb-2">Teléfono *</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-coffe-cream rounded-lg focus:outline-none focus:border-coffe-accent transition-colors"
                placeholder="+56 9 1234 5678"
              />
            </div>

            <div>
              <label className="block text-coffe-dark font-semibold mb-2">Tipo de Evento *</label>
              <select
                name="tipoEvento"
                value={formData.tipoEvento}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-coffe-cream rounded-lg focus:outline-none focus:border-coffe-accent transition-colors"
              >
                <option value="">Selecciona una opción</option>
                <option value="Corporativo / Reunión ejecutiva">Corporativo / Reunión ejecutiva</option>
                <option value="Conferencia / Seminario">Conferencia / Seminario</option>
                <option value="Evento social / Fiesta">Evento social / Fiesta</option>
                <option value="Boda / Celebración">Boda / Celebración</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-coffe-dark font-semibold mb-2">Número de invitados *</label>
              <input
                type="number"
                name="invitados"
                value={formData.invitados}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-coffe-cream rounded-lg focus:outline-none focus:border-coffe-accent transition-colors"
                placeholder="Ej: 50"
              />
            </div>

            <div>
              <label className="block text-coffe-dark font-semibold mb-2">Mensaje adicional</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-coffe-cream rounded-lg focus:outline-none focus:border-coffe-accent transition-colors"
                placeholder="Cuéntanos más sobre tu evento, requerimientos especiales o fechas..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Enviando...' : 'Enviar solicitud'}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;