import React from 'react';
import { Coffee, Users, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-coffe-dark/90 to-coffe-dark/70"></div>
      </div>
      
      {/* Contenido */}
      <div className="relative z-10 container-custom text-center text-coffe-light">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <Coffee className="w-16 h-16 text-coffe-accent" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Elevamos tus reuniones
            <span className="text-coffe-accent"> con el mejor café</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Experiencias únicas de coffee break para empresas y eventos especiales.
            Café de especialidad, pastelería artesanal y servicio profesional.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button onClick={scrollToContact} className="btn-primary">
              Cotizar mi evento
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-coffe-accent" />
              <p className="font-bold text-2xl">500+</p>
              <p className="text-sm">Eventos realizados</p>
            </div>
            <div className="text-center">
              <Coffee className="w-8 h-8 mx-auto mb-2 text-coffe-accent" />
              <p className="font-bold text-2xl">15+</p>
              <p className="text-sm">Variedades de café</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-coffe-accent" />
              <p className="font-bold text-2xl">24/7</p>
              <p className="text-sm">Disponibilidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;