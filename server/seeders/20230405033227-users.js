'use strict';

const userData = require('../src/constans/users.ts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('users', userData);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('users', null, {});
	},
};
