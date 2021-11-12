'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('couponCodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      percentageDiscount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      maxDiscount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      expiresAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      minDiscount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      usage: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      maxUsage: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      isValid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('couponCodes');
  }
};