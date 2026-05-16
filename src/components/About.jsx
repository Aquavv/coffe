import React from 'react';
import { Award, Leaf, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const titleRef   = useScrollAnimation({ variant: 'fade-up' });
  const imageRef   = useScrollAnimation({ variant: 'fade-left',  delay: 100 });
  const textRef    = useScrollAnimation({ variant: 'fade-right', delay: 150 });
  const item1Ref   = useScrollAnimation({ variant: 'fade-up',   delay: 200 });
  const item2Ref   = useScrollAnimation({ variant: 'fade-up',   delay: 320 });
  const item3Ref   = useScrollAnimation({ variant: 'fade-up',   delay: 440 });

  return (
    <section className="py-20 bg-coffe-light">
      <div className="container-custom">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-coffe-dark mb-4">
            Café con <span className="text-coffe-primary">Propósito</span>
          </h2>
          <div className="w-24 h-1 bg-coffe-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef}>
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Barista preparando café"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <p ref={textRef} className="text-lg text-coffe-dark/80 leading-relaxed">
              En <span className="font-semibold text-coffe-primary">Coffee Break Events</span>, creemos que
              cada pausa activa es una oportunidad para inspirar. Por eso, seleccionamos los mejores
              granos de café de especialidad y trabajamos con pasteleros artesanos apasionados.
            </p>

            <div className="space-y-4">
              <div ref={item1Ref} className="flex items-start gap-3">
                <Award className="w-6 h-6 text-coffe-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-coffe-dark">Calidad Premium</h3>
                  <p className="text-coffe-dark/70">Granos 100% arábica, tostado artesanal y baristas certificados.</p>
                </div>
              </div>

              <div ref={item2Ref} className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-coffe-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-coffe-dark">Sostenibilidad</h3>
                  <p className="text-coffe-dark/70">Comercio directo con productores locales y empaques eco-friendly.</p>
                </div>
              </div>

              <div ref={item3Ref} className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-coffe-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-coffe-dark">Servicio Personalizado</h3>
                  <p className="text-coffe-dark/70">Nos adaptamos a tus necesidades y presupuesto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;