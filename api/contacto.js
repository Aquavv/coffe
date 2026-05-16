import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, email, telefono, tipoEvento, invitados, mensaje } = req.body;

  // Configuración de Nodemailer usando variables de entorno
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const mailOptions = {
      from: `"Coffee Break Events" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nueva cotización - ${nombre} - ${tipoEvento}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #FDFBF7; color: #1A0F0A;">
          <h2 style="color: #6F4E37;">🍵 Nueva Solicitud de Coffee Break</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Evento:</strong> ${tipoEvento}</p>
          <p><strong>Invitados:</strong> ${invitados}</p>
          ${mensaje ? `<p><strong>Mensaje:</strong> ${mensaje}</p>` : ''}
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: '¡Solicitud enviada!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al enviar el correo' });
  }
}
