'use strict';

const data = require('../src/constans/Specialist_sede.ts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Specialist_sede', data);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Specialist_sede', null, {});
	},
};
