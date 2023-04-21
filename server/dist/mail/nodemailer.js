"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftMail = exports.sendEmail = void 0;
const nodemailer_1 = require("nodemailer");
const config_1 = require("../config/config");
const transporter = (0, nodemailer_1.createTransport)({
    service: 'gmail',
    auth: {
        user: config_1.NODEMAILER_EMAIL,
        pass: config_1.NODEMAILER_PASS,
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
function sendEmail(email, name) {
    transporter.sendMail({
        from: 'CMC- Citas Médicas',
        to: email,
        subject: '¡Bienvenido a la plataforma de citas médicas!',
        html: `
            <h3	>¡Hola, ${name}!</h3>
            <p>
            <b>Gracias por registrarte en nuestra nueva plataforma</b>, ya puedes agendar turnos con los especialistas asignados desde la comodidad de tu hogar. 
            </p>
            <p>El próximo paso es ingresar con tu correo electrónico y contraseña para acceder al sitio principal, a través del siguiente <a href="https://c10-32-m-mern.vercel.app/#/login">LINK.</a> </p>
            `,
    }, (error, info) => {
        if (error)
            console.log(error);
        else
            console.log('Email enviado');
    });
}
exports.sendEmail = sendEmail;
function shiftMail(email, tuition, especialistName, date, hour) {
    transporter.sendMail({
        from: 'CMC- Citas Médicas',
        to: email,
        subject: '¡Tienes un nuevo turno agendado!',
        html: `
		<h3	>¡Hola!</h3>
		<p>
			Tu turno con el Dr/a. <b> ${especialistName}</b> (N° de matrícula:${tuition}) para el día <b>${date}</b> a las <b>${hour}</b> se ha agendado con éxito.
		</p>
		<p> <i>Recuerda estar MEDIA HORA ANTES del turno pactado.</i>  </p>
		`,
    });
}
exports.shiftMail = shiftMail;
