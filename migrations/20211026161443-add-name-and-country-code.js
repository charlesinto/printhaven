"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("deliveryAddresses", "firstName", {
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.addColumn("deliveryAddresses", "countryCode", {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn("deliveryAddresses", "lastName", {
      type: Sequelize.STRING,
      allowNull: false
    });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("deliveryAddresses", "firstName");

    await queryInterface.removeColumn("deliveryAddresses", "countryCode");

    await queryInterface.removeColumn("deliveryAddresses", "lastName");

  },
};
