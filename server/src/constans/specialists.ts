'use strict';

const speciality = require('./speciality.ts');

console.log(speciality);

module.exports = [
	{
		name: 'Horacio Guaraní',
		speciality: speciality[0].description,
		adress: 'Av.Francia 2942',
		phone: 2323241412,
		tuition: 23414212,
		consultingRoom: 3,
	},
	{
		name: 'Homero Simpson',
		speciality: speciality[1].description,
		adress: 'Av.Siempre Viva 145',
		phone: 41772,
		tuition: 5675679,
		consultingRoom: 33,
	},
	{
		name: 'Marge Simpson',
		speciality: speciality[2].description,
		adress: 'Green hills 2312',
		phone: 222444777,
		tuition: 794933,
		consultingRoom: 13,
	},
	{
		name: 'Lionel Messi',
		speciality: speciality[3].description,
		adress: 'Israel 2324',
		phone: 101010,
		tuition: 231831231,
		consultingRoom: 10,
	},
	{
		name: 'Lisa Simpson',
		speciality: speciality[4].description,
		adress: 'Sarmiento 2832',
		phone: 4662719,
		tuition: 42342243,
		consultingRoom: 7,
	},
];
