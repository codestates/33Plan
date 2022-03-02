'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('countPerWeeks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      good_id: {
        type: Sequelize.INTEGER
      },
      trying_id: {
        type: Sequelize.INTEGER
      },
      bad_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('countPerWeeks');
  }
};