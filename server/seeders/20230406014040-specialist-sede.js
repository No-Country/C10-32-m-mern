'use strict';

const data = require('../src/constans/Speciality_sede.ts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Speciality_sede', data);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Speciality_sede', null, {});
	},
};
