'use strict';

const speciality = require('./speciality.ts');

console.log(speciality);

module.exports = [
	{
		name: 'Horacio Guaraná',
		speciality: speciality[0].description,
		adress: 'Av.Francia 2942',
		phone: 2323241412,
		tuition: '24179',
		consultingRoom: 3,
	},
	{
		name: 'Carlos Simpson',
		speciality: speciality[1].description,
		adress: 'Av.Siempre Viva 145',
		phone: 41772,
		tuition: '56756',
		consultingRoom: 33,
	},
	{
		name: 'Aldana Gomez',
		speciality: speciality[2].description,
		adress: 'Green hills 2312',
		phone: 222444777,
		tuition: '79493',
		consultingRoom: 13,
	},
	{
		name: 'Laura Melano',
		speciality: speciality[3].description,
		adress: 'Israel 2324',
		phone: 101010,
		tuition: '33221',
		consultingRoom: 10,
	},
	{
		name: 'Carlos Astudillo',
		speciality: speciality[4].description,
		adress: 'Cerrito 3774',
		phone: 4662719,
		tuition: '22424',
		consultingRoom: 10,
	},
	{
		name: 'Janet Vallejos',
		speciality: speciality[5].description,
		adress: 'Grandoli 4789',
		phone: 3412793098,
		tuition: '56921',
		consultingRoom: 18,
	},
	{
		name: 'Juan Manuel García',
		speciality: speciality[6].description,
		adress: 'Godoy 7474',
		phone: 225584,
		tuition: '98013',
		consultingRoom: 74,
	},
];
