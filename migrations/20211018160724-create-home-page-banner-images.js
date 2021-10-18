"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("HomePageBannerImages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      homePageBannerId: {
        type: Sequelize.INTEGER,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "HomePageBannerImages",
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
    await queryInterface.dropTable("HomePageBannerImages");
  },
};
