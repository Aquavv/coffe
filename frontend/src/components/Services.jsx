import React from 'react';
import { Briefcase, PartyPopper, Sparkles, Coffee } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Briefcase,
    name: 'Pack Corporativo Express',
    price: 'Desde $150',
    features: [
      'Café americano de especialidad',
      'Variedad de té y aguas saborizadas',
      'Mini pastelería (4 opciones)',
      'Servicio de 2 horas',
      'Para 10-25 personas'
    ],
    popular: false
  },
  {
    icon: PartyPopper,
    name: 'Pack Eventos Premium',
    price: 'Desde $350',
    features: [
      'Barista en vivo con latte art',
      'Selección de 3 cafés de especialidad',
      'Pastelería artesanal premium',
      'Bocadillos salados gourmet',
      'Montaje temático personalizado',
      'Para 20-50 personas'
    ],
    popular: true
  },
  {
    icon: Sparkles,
    name: 'Coffee Break Personalizado',
    price: 'Cotizar',
    features: [
      'Diseño a medida según tu evento',
      'Menús especiales (vegano, sin TACC)',
      'Estación de café con blends exclusivos',
      'Servicio de catering completo',
      'Staff profesional',
      'Para cualquier cantidad'
    ],
    popular: false
  }
];

const ServiceCard = ({ service, delay }) => {
  const Icon = service.icon;
  const cardRef = useScrollAnimation({ variant: 'fade-up', delay });

  return (
    <div
      ref={cardRef}
      className={`bg-coffe-light rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border ${
        service.popular ? 'border-coffe-accent relative' : 'border-coffe-cream'
      }`}
    >
      {service.popular && (
        <div className="bg-coffe-accent text-coffe-dark text-center py-2 font-semibold text-sm">
          Más popular
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-coffe-cream rounded-full">
            <Icon className="w-8 h-8 text-coffe-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-center text-coffe-dark mb-2">{service.name}</h3>
        <p className="text-2xl font-bold text-center text-coffe-accent mb-4">{service.price}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-coffe-dark/80">
              <Coffee className="w-4 h-4 text-coffe-accent flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full btn-secondary text-center"
        >
          Solicitar
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const titleRef = useScrollAnimation({ variant: 'fade-up' });
  const subtitleRef = useScrollAnimation({ variant: 'fade-up', delay: 100 });

  return (
    <section className="py-20 bg-coffe-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-serif text-coffe-dark mb-4">
            Nuestros <span className="text-coffe-primary">Packs</span>
          </h2>
          <div className="w-24 h-1 bg-coffe-accent mx-auto"></div>
          <p ref={subtitleRef} className="text-coffe-dark/70 mt-4 max-w-2xl mx-auto">
            Soluciones diseñadas para cada tipo de evento. Calidad y profesionalismo garantizados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;