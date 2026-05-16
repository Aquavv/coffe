// Verificar que no es un bot
app.post('/api/contacto', async (req, res) => {
  const { recaptchaToken } = req.body;
  
  // Verificar token con Google
  const verification = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: `secret=${process.env.RECAPTCHA_SECRET}&response=${recaptchaToken}`
  });
  
  if (!verification.success) {
    return res.status(400).json({ error: 'Verificación de seguridad fallida' });
  }
});