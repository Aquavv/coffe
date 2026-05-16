import React from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=800&q=80',
    title: 'Montaje elegante'
  },
  {
    url: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80',
    title: 'Barista en vivo'
  },
  {
    url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
    title: 'Pastelería artesanal'
  },
  {
    url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    title: 'Variedad de café'
  },
  {
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    title: 'Detalles premium'
  },
  {
    url: 'https://images.unsplash.com/photo-1522184216316-3c25379f9790?auto=format&fit=crop&w=800&q=80',
    title: 'Experiencia única'
  }
];

const Gallery = () => {
  return (
    <section className="py-20 bg-coffe-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-coffe-dark mb-4">
            Nuestro <span className="text-coffe-primary">Trabajo</span>
          </h2>
          <div className="w-24 h-1 bg-coffe-accent mx-auto"></div>
          <p className="text-coffe-dark/70 mt-4">
            Momentos que inspiran, montajes que cautivan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffe-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-coffe-light font-semibold text-center">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;