import transporter from '../config/mail.js'
import dotenv from 'dotenv'
dotenv.config()

async function sendMail (email, subject, text) {
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject,
    text
  })
}

export const mailService = { sendMail }
