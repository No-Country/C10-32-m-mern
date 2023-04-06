'use strict';

const data = require('../src/constans/Specialist_Speciality.ts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Specialist_Speciality', data);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Specialist_Speciality', null, {});
	},
};
