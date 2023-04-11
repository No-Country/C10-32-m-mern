'use strict';

const asociadosData = require('../src/constans/asociados.ts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('asociados', asociadosData);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('asociados', null, {});
	},
};
