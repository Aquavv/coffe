import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Puedes cambiar a otro servicio SMTP
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Validar configuración de email
const validateEmailConfig = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ ERROR: Configura EMAIL_USER y EMAIL_PASS en el archivo .env');
    return false;
  }
  return true;
};

// Endpoint de contacto
app.post('/api/contacto', async (req, res) => {
  try {
    const { nombre, email, telefono, tipoEvento, invitados, mensaje } = req.body;

    // Validación básica
    if (!nombre || !email || !telefono || !tipoEvento || !invitados) {
      return res.status(400).json({ 
        error: 'Por favor, completa todos los campos obligatorios' 
      });
    }

    if (!validateEmailConfig()) {
      return res.status(500).json({ 
        error: 'Error de configuración del servidor de correo' 
      });
    }

    // Diseño del correo HTML
    const mailOptions = {
      from: `"Coffee Break Events" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Envía a tu correo
      replyTo: email,
      subject: `Nueva cotización - ${nombre} - ${tipoEvento}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #1A0F0A;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background: #FDFBF7;
              border-radius: 10px;
            }
            .header {
              background: #6F4E37;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              padding: 30px;
              background: white;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 15px;
              padding: 10px;
              background: #F5E6D3;
              border-radius: 5px;
            }
            .field strong {
              color: #6F4E37;
              display: inline-block;
              min-width: 120px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 2px solid #D4AF37;
              font-size: 12px;
              color: #6F4E37;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🍵 Nueva Solicitud de Coffee Break</h2>
            </div>
            <div class="content">
              <div class="field">
                <strong>👤 Nombre:</strong> ${nombre}
              </div>
              <div class="field">
                <strong>📧 Correo electrónico:</strong> ${email}
              </div>
              <div class="field">
                <strong>📞 Teléfono:</strong> ${telefono}
              </div>
              <div class="field">
                <strong>🎉 Tipo de Evento:</strong> ${tipoEvento}
              </div>
              <div class="field">
                <strong>👥 Número de invitados:</strong> ${invitados}
              </div>
              ${mensaje ? `
              <div class="field">
                <strong>💬 Mensaje adicional:</strong><br>
                ${mensaje}
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Este mensaje fue enviado desde el formulario de contacto de Coffee Break Events</p>
              <p>Responder a: ${email}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ 
      message: '¡Solicitud enviada con éxito! Te contactaremos pronto.',
      success: true 
    });
    
  } catch (error) {
    console.error('Error al enviar correo:', error);
    res.status(500).json({ 
      error: 'Error al procesar la solicitud. Por favor, intenta más tarde.',
      details: error.message 
    });
  }
});

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Servidor funcionando correctamente' });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📧 Email configurado con: ${process.env.EMAIL_USER || 'No configurado'}`);
});