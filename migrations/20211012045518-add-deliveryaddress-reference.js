"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn("deliveryAddresses", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      allowNull: false
    });

    await queryInterface.removeColumn("deliveryAddresses", "lastName");
    await queryInterface.removeColumn("deliveryAddresses", "firstName");
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn("deliveryAddresses", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false
    });

    await queryInterface.addColumn("deliveryAddresses", "lastName", {
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.addColumn("deliveryAddresses", "userId", {
      type: Sequelize.STRING,
      allowNull: false,
    });;
  },
};
