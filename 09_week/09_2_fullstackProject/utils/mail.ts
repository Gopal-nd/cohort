import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: process.env.MAIL_TRAP,
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "0dddb2f6bbfbac",
      pass: process.env.PASSWORD,
    },
  });