import { createTransport } from 'nodemailer';

import { NODEMAILER_EMAIL, NODEMAILER_PASS } from '../config/config';

const transporter = createTransport({
	service: 'gmail',
	auth: {
		user: NODEMAILER_EMAIL,
		pass: NODEMAILER_PASS,
	},
});

transporter
	.verify()
	.then(() => {
		console.log('Ready for send mails');
	})
	.catch((error) => {
		console.log(error.message);
	});

export function sendEmail(email: string, name: string) {
	transporter.sendMail(
		{
			from: 'CMC- Citas Médicas',
			to: email,
			subject: '¡Bienvenido a la plataforma de citas médicas!',
			html: `
            <h1>¡Hola, ${name}!</h1>
            <p>
            <b>Gracias por registrarte en nuestra nueva plataforma</b>, ya puedes agendar turnos con los especialistas asignados desde la comodidad de tu hogar. 
            </p>
            <p>El próximo paso es ingresar con tu correo electrónico y contraseña para acceder al sitio principal, a través del siguiente <a href="https://c10-32-m-mern.vercel.app/#/login">LINK.</a> </p>
           
            `,
		},
		(error, info) => {
			if (error) console.log(error);
			else console.log('Email enviado');
		}
	);
}
