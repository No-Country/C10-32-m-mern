'use strict';

const specialistData = require('../src/constans/specialists.ts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('specialists', specialistData);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('specialists', null, {});
	},
};
