// En server.js, después de los imports
import rateLimit from 'express-rate-limit';

// Limitar a 5 solicitudes por hora desde la misma IP
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 5, // máximo 5 solicitudes
  message: 'Demasiadas solicitudes. Por favor, intenta más tarde.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Aplicar el limiter solo al endpoint de contacto
app.post('/api/contacto', contactLimiter, async (req, res) => {
  // ... tu código existente
});