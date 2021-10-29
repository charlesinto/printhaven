'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.removeColumn('deliveryAddresses', 'city');
    await queryInterface.removeColumn('deliveryAddresses', 'region');
    await queryInterface.addColumn("deliveryAddresses", "cityId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cities",
        key: "id",
      },
    });

    await queryInterface.addColumn("deliveryAddresses", "regionId", {
      type: Sequelize.INTEGER,
      references: {
        model: "regions",
        key: "id",
      },
    });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn('deliveryAddresses', 'cityId',);
    await queryInterface.removeColumn('deliveryAddresses', 'regionId',);
    await queryInterface.addColumn("deliveryAddresses", "city", {
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.addColumn("deliveryAddresses", "region", {
      type: Sequelize.STRING,
      allowNull: false
    });

  }
};
