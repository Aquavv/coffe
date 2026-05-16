import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <ContactForm />
      
      {/* Footer */}
      <footer className="bg-coffe-dark text-coffe-light">
        {/* Línea dorada decorativa */}
        <div className="h-px bg-gradient-to-r from-transparent via-coffe-accent to-transparent" />
        <div className="container-custom text-center py-10 space-y-2">
          <p className="text-coffe-accent font-serif text-xl tracking-widest uppercase">
            Coffee Break Events
          </p>
          <p className="text-xs opacity-50 tracking-wider">
            Café de especialidad · Pastelería artesanal · Servicio profesional
          </p>
          <p className="text-xs opacity-40 pt-4">
            © {new Date().getFullYear()} Coffee Break Events — Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;