import nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'zaikaman123@gmail.com',
    pass: 'wqok psui qful srxm'
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const mailOptions: Partial<Options> = {
  from: 'currency.vn <your-email@gmail.com>',
  priority: 'high',
  headers: {
    'Importance': 'high',
    'X-Priority': '1',
    'X-MSMail-Priority': 'High'
  }
};

// Verify connection
transporter.verify(function (error, success) {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready');
  }
}); 