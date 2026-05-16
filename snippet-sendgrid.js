import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: process.env.EMAIL_USER,
  from: 'tuempresa@tudominio.com', // ¡Usa tu dominio real!
  subject: 'Nuevo contacto',
  html: '...',
};

await sgMail.send(msg);