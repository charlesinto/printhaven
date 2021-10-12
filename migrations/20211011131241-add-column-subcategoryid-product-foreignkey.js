"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.changeColumn("Products", "subCategoryId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        // User belongsTo ParentCategory 1:1
        model: "SubCategories",
        key: "id",
      },
    });
    await queryInterface.removeColumn("Products", "subCatgoryId");
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn("Products", "subCategoryId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("Products", "subCatgoryId");
  },
};
