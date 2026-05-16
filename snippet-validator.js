// En server.js
import { body, validationResult } from 'express-validator';

app.post('/api/contacto', 
  contactLimiter,
  // Validaciones
  body('nombre').trim().isLength({ min: 2 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('telefono').trim().isLength({ min: 8 }),
  body('tipoEvento').notEmpty(),
  body('invitados').isInt({ min: 1, max: 10000 }),
  
  async (req, res) => {
    // Verificar errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // ... resto del código
  }
);