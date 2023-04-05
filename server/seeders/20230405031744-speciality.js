'use strict';

const specialityData = require('../src/constans/speciality.ts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('specialities', specialityData);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('specialities', null, {});
	},
};
