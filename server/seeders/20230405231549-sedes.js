'use strict';

const sedesData = require('../src/constans/sede.ts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('sedes', sedesData);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('sedes', null, {});
	},
};
