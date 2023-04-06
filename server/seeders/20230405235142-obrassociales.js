'use strict';

const data = require('../src/constans/obrasocial.ts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('obrasociales', data);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('obrasociales', null, {});
	},
};
