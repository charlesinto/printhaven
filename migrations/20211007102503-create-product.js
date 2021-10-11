"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      finalPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sellingPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      stockCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      shippingType: {
        type: Sequelize.STRING,
        defaultValue: "HOME_DELIVERY",
      },
      customizationType: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      subCatgoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "SubCategories",
          key: "id",
        },
      },
      mainImageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thumbNailUrl: {
        type: Sequelize.STRING,
      },
      otherImageUrl1: {
        type: Sequelize.STRING,
      },
      otherImageUrl2: {
        type: Sequelize.STRING,
      },
      otherImageUrl3: {
        type: Sequelize.STRING,
      },
      otherImageUrl4: {
        type: Sequelize.STRING,
      },
      isBlocked: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Products");
  },
};
