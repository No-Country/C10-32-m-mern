'use sctrict';

const obraSocial = require('./obrasocial.ts');

console.log(obraSocial);

module.exports = [
	{
		id: 1,
		name: 'Juliana',
		secondname: 'Gomez',
		document: '35838225',
		email: 'juliana@gmail.com',
		password: '12345',
		phone: '34128402',
		// obrasocialId: obraSocial[0].id,
	},
	{
		id: 2,
		name: 'Juan',
		secondname: 'Perez',
		document: '26838331',
		email: 'juan@gmail.com',
		password: '1234521',
		phone: '523562',
		obrasocialId: obraSocial[1].id,
	},
	{
		id: 3,
		name: 'Julian',
		secondname: 'Ballestero',
		document: '4262722',
		email: 'jb@gmail.com',
		password: '444222',
		phone: '234253',
		obrasocialId: obraSocial[2].id,
	},
	{
		id: 4,
		name: 'Mia',
		secondname: 'OConner',
		document: '312421',
		email: 'mia.o@gmail.com',
		password: '1223345',
		phone: '32412412',
		obrasocialId: obraSocial[3].id,
	},
	{
		id: 5,
		name: 'Stephen',
		secondname: 'King',
		document: '22421341',
		email: 'sk@gmail.com',
		password: '23141',
		phone: '521512',
		obrasocialId: obraSocial[4].id,
	},
];
