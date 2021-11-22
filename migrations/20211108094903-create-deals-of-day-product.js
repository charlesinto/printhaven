"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DealsOfDayProducts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dealId: {
        type: Sequelize.INTEGER,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "DealsOfDays",
          key: "id",
        },
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "Products",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("DealsOfDayProducts");
  },
};
